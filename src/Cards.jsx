import logo from "../assets/customcolor_icon_transparent_background.png"
const Cards = () => {
  const styles = {
    card: {
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "15px",
      width: "250px",
      boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
      textAlign: "left",
      margin: "10px"
  
    },
  };

  return (
    <div style={styles.card} className="card" >
      <img src={logo} width="200px"/>
    </div>
  );
} 

export default Cards;