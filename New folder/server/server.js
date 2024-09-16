import setupExpressInsight from 'express_insight';
import express from 'express';

const app = express();

setupExpressInsight(app, {
    projectName: "Example Project",
  });



app.get('/', (req, res) => {
res.send("Hello World")
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
