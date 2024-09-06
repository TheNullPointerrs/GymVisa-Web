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
            info@gymvisa.co
          </Button>
        </div>)
}

export default Footer