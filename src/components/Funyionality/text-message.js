

function TextMessage() {
  var myDate = new Date();
    var hrs = myDate.getHours();
    const Message = hrs < 12 ? 
    `"Good Morning"
    আসালামু-আলাইকুম
    `
     :  
     hrs >= 12 && hrs <= 17 ? 
     "Good Afternoon" 
     : 
     hrs >= 17 && hrs <= 24 ? 
     `Good Evening
     আসালামু-আলাইকুম` 
     : "Have A Good Day";

  return (
    <div className="mx-auto w-2/3">
      <h1 className="text-4xl font-bold">
     {Message}</h1>
    </div>
  );
}

export default TextMessage;
