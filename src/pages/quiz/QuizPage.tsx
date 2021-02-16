import CardComponent from "../../components/CardComponent/CardComponent"

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

  return (
    <div className='container'>
      <div className="row">
        <div className="col-sm-2">
          <CardComponent classNames={['fluid']} >

          </CardComponent>
        </div>
        <div className="col-sm-8 col-sm-offset-1">

        </div>
      </div>
    </div>

  );
}

export default QuizPage;