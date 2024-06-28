const Visitor = require('../models/visitor');

// (1) GET / => localhost:PORT/
exports.main = (req, res) => {
  res.render('index');
};


exports.getVisitors = async (req, res)=>{
  try{
    const visitor = await Visitor.findAll();
    res.json(visitor);
  }catch(err){
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
}


exports.getVisitor = async (req, res)=>{
  try{
    console.log(req.params.id);
    const { id } = req.params;
    const visitor = await Visitor.findOne({
      where: {id},
    })
  }catch(err){
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
}


exports.postVisitor = async (req, res)=>{
  try{
    console.log(req.body);
    const{name, commend} = req.body;
    const newVisitor = await Visitor.create({
      name, commend
    });
    res.json(newVisitor);
  }catch(err){
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
}


exports.deleteVisitor = async (req, res)=>{
  try{
    const {id} = req.params;
    const isDeleted = await Visitor.destroy({
      where: {id}
    });
    console.log(isDeleted);
    if(isDeleted){
      return res.send(true);
    }else{
      return res.send(false);
    }
  }catch(err){
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
}



exports.patchVisitor = async (req, res)=>{
  try{
    console.log(req.body);
    const{id} = req.params;
    const{commend} = req.body;

    const updatedVisitor = await Visitor.update(
      {commend},
      {where: {id}}
    );
    res.json(updatedVisitor)
  }catch(err){
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
}