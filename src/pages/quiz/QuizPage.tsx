import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import InputComponent from "../../components/InputComponent/InputComponent";
import SelectComponent from "../../components/SelectComponent/SelectComponent";
import CollapseSectionComponent from "../../components/CollapseSectionComponent/CollapseSectionComponent";

interface IProps {
  quiz: {
    title: string
    questions: {
      title: string
      isMultiple: boolean
      answers: string[]
    }[]
  }
}

const QuizPage = (props: IProps) => {
  const { title, questions } = props.quiz;
  const questionType = [
    { key: 'single', value: 'Single' },
    { key: 'multiply', value: 'Multiply' }
  ];

  const templateHandler = () => { };

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-5">
          <form>
            <fieldset>
              <legend>Quiz</legend>
              <InputComponent label='Title' onChange={templateHandler} type='text' id='quiz-title-input'></InputComponent>
            </fieldset>
          </form>

          <form>
            <fieldset>
              <legend>Question</legend>
              <div className="row">
                <div className="col-md">
                  <InputComponent label='Text' onChange={templateHandler} type='text' id='question-text-input' />
                  <div className='input-group vertical'>
                    <label>Type</label>
                    <SelectComponent options={questionType} onChange={templateHandler}></SelectComponent>
                  </div>
                </div>
              </div>

              <div className='input-group vertical'>
                <label>Answers</label>
                <SelectComponent options={[]} onChange={templateHandler}></SelectComponent>
              </div>
              <div className="button-group">
                <ButtonComponent classNames={['primary']} text='Add' onClick={templateHandler}></ButtonComponent>
                <ButtonComponent text='Reset' onClick={templateHandler}></ButtonComponent>
              </div>
            </fieldset>
          </form>

          <form>
            <fieldset>
              <legend>Answer</legend>
              <InputComponent label='Text' onChange={templateHandler} type='text' id='answer-text-input' />
              <div className="button-group">
                <ButtonComponent classNames={['primary']} text='Add' onClick={templateHandler}></ButtonComponent>
                <ButtonComponent text='Reset' onClick={templateHandler}></ButtonComponent>
              </div>
            </fieldset>
          </form>
        </div>
      </div >
    </div >

  );
}

export default QuizPage;