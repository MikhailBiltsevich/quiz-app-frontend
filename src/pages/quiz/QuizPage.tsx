import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import InputComponent from "../../components/InputComponent/InputComponent";
import SelectComponent from "../../components/SelectComponent/SelectComponent";
import CollapseSectionComponent from "../../components/CollapseSectionComponent/CollapseSectionComponent";
import FieldsetComponent from "../../components/FieldsetComponent/FieldsetComponent";
import InputGroupComponent from "../../components/InputGroupComponent/InputGroupComponent";
import { BaseSyntheticEvent, SyntheticEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion, removeQuestion, selectQuestions, selectTitle, setTitle, updateQuestion } from '../../app/slices/quizSlice';
import { IAnswer, IQuestion, questionTypes } from "../../app/types";

const QuizPage = () => {
  const generateId = (identifiers: number[]) => {
    return identifiers.length === 0 ? 1 : Math.max(...identifiers) + 1;
  }

  const dispatch = useDispatch();
  const title = useSelector(selectTitle);
  const questions = useSelector(selectQuestions);

  const [type, setQuestionType]: ['single' | 'multiply', any] = useState('single');

  const defaultQuestion: IQuestion = {
    id: 0,
    text: '',
    answers: new Array<IAnswer>(),
    type
  }

  const [question, setQuestion]: [IQuestion, any] = useState(defaultQuestion);

  const defaultAnswer: IAnswer = {
    id: 0,
    text: '',
    points: 0
  }

  const [answer, setAnswer]: [IAnswer, any] = useState(defaultAnswer);

  const resetAnswer = () => setAnswer(defaultAnswer);
  const resetQuestion = () => setQuestion(defaultQuestion);

  const handleQuestionTypeChange = (event: BaseSyntheticEvent) => {
    const selectedIndex = event.target.options.selectedIndex;
    const key = event.target[selectedIndex].value;

    let type: 'single' | 'multiply' = key;
    setQuestionType(type);
    setQuestion({ ...question, type });
  }

  const handleAnswerChange = (event: BaseSyntheticEvent) => {
    const selectedIndex = event.target.options.selectedIndex;
    const id = +event.target[selectedIndex].value;

    const findedAnswer = question.answers.find(a => a.id === id);
    setAnswer({ ...findedAnswer });
  }

  const handleQuestionTextChange = (event: any) => {
    setQuestion({ ...question, text: event.target.value });
  }

  const handleAnswerTextChange = (event: any) => {
    setAnswer({ ...answer, text: event.target.value });
  }

  const handleSaveQuestionClick = (event: SyntheticEvent) => {
    event.preventDefault();
    if (!question.id) {
      question.id = generateId(questions.map(item => item.id));
      dispatch(addQuestion(question));
    } else {
      const index = questions.findIndex(q => q.id === question.id)
      dispatch(updateQuestion({ index, question }));
    }
    defaultQuestion.type = type;
    resetQuestion();
    resetAnswer();
  }


  const handleSaveAnswerClick = (event: SyntheticEvent) => {
    event.preventDefault();
    const newAnswer = { ...answer };
    let answers: IAnswer[];

    if (!answer.id) {
      newAnswer.id = generateId(question.answers.map(item => item.id));
      answers = [...question.answers, newAnswer];
      resetAnswer();
    } else {
      const index = question.answers.findIndex(a => a.id === newAnswer.id);
      answers = [...question.answers];
      answers.splice(index, 1, newAnswer);
    }
    setQuestion({ ...question, answers });
  }

  const handleResetQuestionClick = (event: SyntheticEvent) => {
    event.preventDefault();
    resetQuestion();
  }

  const handleResetAnswerClick = (event: SyntheticEvent) => {
    event.preventDefault();
    resetAnswer();
  }

  const handleDeleteQuestionClick = (event: any) => {
    const questionId = +event.target.dataset.id;
    const index = questions.findIndex(q => q.id === questionId);
    dispatch(removeQuestion(index));
    if (question.id === questionId) {
      resetQuestion();
      resetAnswer();
    }
  }

  const handleDeleteAnswerClick = (event: any) => {
    event.preventDefault();
    const answers = [...question.answers];
    const index = answers.findIndex(a => answer.id === a.id);

    answers.splice(index, 1);
    setQuestion({ ...question, answers });
    const selectedAnswer = answers.length
      ? { ...answers[0] }
      : { ...defaultAnswer };
    setAnswer(selectedAnswer);
  }

  const handleEditQuestionClick = (event: any) => {
    const questionId = +event.target.dataset.id;
    const findedQuestion = questions.find((q) => q.id === questionId);
    setQuestion({ ...findedQuestion });
    setQuestionType(findedQuestion?.type);
    const selectedAnswer = findedQuestion?.answers.length
      ? { ...findedQuestion.answers[0] }
      : { ...defaultAnswer };

    setAnswer(selectedAnswer);
  }

  const hasQuestions = questions.length > 0 ? true : false;
  const templateHandler = () => { };

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-5">
          <form>
            <FieldsetComponent legendText='Quiz'>
              <InputGroupComponent labelText='Title'>
                <InputComponent value={title} placeholder='Title' onChange={(event) => { dispatch(setTitle(event.target.value)); }} type='text' id='quiz-title-input'></InputComponent>
              </InputGroupComponent>
            </FieldsetComponent>


            <FieldsetComponent legendText='Question'>
              <div className="row">
                <div className="col-md">
                  <InputGroupComponent labelText='Text'>
                    <InputComponent placeholder='Text' onChange={handleQuestionTextChange} value={question.text} type='text' id='question-text-input' />
                  </InputGroupComponent>
                  <InputGroupComponent labelText='Type'>
                    <SelectComponent options={questionTypes} value={type} onChange={handleQuestionTypeChange}></SelectComponent>
                  </InputGroupComponent>
                </div>
              </div>

              <InputGroupComponent labelText='Answers'>
                <SelectComponent options={question.answers.map(item => ({ key: item.id.toString(), value: item.text }))} value={answer.id.toString()} onChange={handleAnswerChange}></SelectComponent>
              </InputGroupComponent>
              <div className="button-group">
                <ButtonComponent classNames={['primary']} text='Save' onClick={handleSaveQuestionClick}></ButtonComponent>
                <ButtonComponent text='Reset' onClick={handleResetQuestionClick}></ButtonComponent>
              </div>
            </FieldsetComponent>

            <FieldsetComponent legendText='Answer'>
              <InputGroupComponent labelText='Text'>
                <InputComponent placeholder='Text' onChange={handleAnswerTextChange} value={answer.text} type='text' id='answer-text-input' />
              </InputGroupComponent>
              <div className="button-group">
                <ButtonComponent classNames={['primary']} text='Save' onClick={handleSaveAnswerClick}></ButtonComponent>
                <ButtonComponent text='Reset' onClick={handleResetAnswerClick}></ButtonComponent>
                <ButtonComponent text='Delete' onClick={handleDeleteAnswerClick} isDisabled={false}></ButtonComponent>
              </div>
            </FieldsetComponent>
          </form>
        </div>

        <div className="col-md">

          <CardComponent classNames={['fluid']}>
            <div className="section">
              <h3>Questions</h3>
            </div>
            <div className="section">
              {hasQuestions
                ?
                <div className="collapse">
                  {questions.map((item) => (
                    <CollapseSectionComponent id={item.id.toString()} key={item.id} label={item.text}>
                      <div className="row">
                        <div className="col-sm">
                          <p>
                            <strong>Type:</strong> {item.type}
                          </p>
                          <ul>
                            {item.answers.map((answer) => (
                              <li key={answer.id}>{answer.text}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="col-sm-3">
                          <InputGroupComponent>
                            <ButtonComponent id={item.id} text='Edit' onClick={handleEditQuestionClick}></ButtonComponent>
                            <ButtonComponent id={item.id} text='Delete' classNames={['secondary']} onClick={handleDeleteQuestionClick}></ButtonComponent>
                          </InputGroupComponent>
                        </div>
                      </div>
                    </CollapseSectionComponent>)
                  )}
                </div>
                :
                <p>There are not any questions yet</p>
              }
            </div>
          </CardComponent>

          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="button-group">
                <ButtonComponent classNames={['tertiary']} text='Save' onClick={templateHandler}></ButtonComponent>
                <ButtonComponent text='Cancel' onClick={templateHandler}></ButtonComponent>
              </div>
            </div>
          </div>

        </div>
      </div >
    </div >

  );
}

export default QuizPage;