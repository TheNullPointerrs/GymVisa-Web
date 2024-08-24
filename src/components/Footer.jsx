import Button from "@mui/material/Button";


const Footer = ()=>{
    return (
        <div
          style={{
            marginTop: "20px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="text"
            style={{
              color: "white",
              textTransform: "none",
              fontSize: "1rem",
            }}
          >
            marhabaemaan@gmail.com
          </Button>
        </div>)
}

export default Footer