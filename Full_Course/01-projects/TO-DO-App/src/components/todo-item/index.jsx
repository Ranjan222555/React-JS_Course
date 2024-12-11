import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

export default function Todoitem({ todo , fetchDeatilesoftodo}) {
  // console.log(todo);

  return (
    <Card
      sx={{
        maxWidth: 360,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography variant="h4" color={"textSecondary"}>
          {todo?.todo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=> fetchDeatilesoftodo(todo?.id)}
          sx={{
            backgroundColor: "black",
            color: "white",
            opacity: "0.75",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
              opacity: "1",
            },
          }}
        >
          Deatils
        </Button>
      </CardActions>
    </Card>
  );
}
