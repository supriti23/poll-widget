import { useEffect, useState } from "react";
import Questions from "../Questions/Questions";
import Options from "../Options/Options";
import Chart from "../Chart/Chart";
import { quesAns } from "../data";
import "./Poll.css";

const Poll = () => {
  const [counter, setCounter] = useState(0);
  const [ques, setQues] = useState(quesAns[counter].ques);
  const [options, setOption] = useState(quesAns[counter].options);
  const [selectedAns, setSelectedAns] = useState(
    quesAns[counter].options[0].id
  );
  const [pollResult, setPollResult] = useState(null);

  function handleVote() {
    let currResult = {};
    const storedResults = JSON.parse(localStorage.getItem(quesAns[counter].id));
    if (storedResults) {
      currResult = { ...storedResults };
      for (let ansId in storedResults) {
        if (ansId === selectedAns) {
          currResult[ansId] += 1;
        }
      }
    } else {
      let optionIds = options.map((item) => {
        return item.id;
      });
      optionIds.map((val) => {
        if (val === selectedAns) currResult[val] = 1;
        else currResult[val] = 0;
      });
    }
    localStorage.setItem(quesAns[counter].id, JSON.stringify(currResult));
    setPollResult(currResult);
  }

  useEffect(() => {
    setQues(quesAns[counter].ques);
    setOption(quesAns[counter].options);
    setSelectedAns(quesAns[counter].options[0].id);
    setPollResult(JSON.parse(localStorage.getItem(quesAns[counter].id)));
  }, [counter]);

  function handlePrev() {
    setCounter((prev) => prev - 1);
  }

  function handleNext() {
    setCounter((prev) => prev + 1);
  }

  function step() {
    switch (counter) {
      case 0:
        return (
          <div className="step middle">
            <button className="stepButton" onClick={() => handleNext()}>
              Next
            </button>
          </div>
        );

      case quesAns.length - 1:
        return (
          <div className="step middle">
            <button className="stepButton" onClick={() => handlePrev()}>
              Prev
            </button>
          </div>
        );
      default:
        return (
          <div className="step side">
            <button className="stepButton" onClick={() => handlePrev()}>
              Prev
            </button>
            <button className="stepButton" onClick={() => handleNext()}>
              Next
            </button>
          </div>
        );
    }
  }
  return (
    <div className="pollContainer col-lg-6 col-md-8 col-11 col-xs-10 col-sm-10">
      <Questions question={ques} />
      <Options
        options={options}
        handleOption={(e) => setSelectedAns(e.target.value)}
        selectedOption={selectedAns}
      />
      <button className="vote" onClick={() => handleVote()}>
        Vote
      </button>
      {pollResult ? <Chart options={options} pollResult={pollResult} /> : null} 
      {step()}
    </div>
  );
};
export default Poll;
