//ProJect Title:Uptime RunTime SuperVision
//Project DESCRIPTION:I don't Know Yet
//Author:Just Coping The ProJect:

//DepenDecies;

const http=require('http');
const url=require('url');



///Here Is The Final Application

const app={};

//App confiiguration

app.config={
    port:3000,

}

//Creating The Server

app.createServer=http.createServer();

app.createServer.listen(app.config.port,()=>{
    
})
