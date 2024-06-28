// 선수와 관련된 컨트롤러 몽므
const {Player, Profile} = require('../models/index');

exports.getPlayers = async (req, res)=>{
    try{
        const players = await Player.findAll();
        res.json(players);
    }catch(err){
        console.error(err);
        res.status(500).send('Internal Server Error')
    }
}
exports.getPlayer = async (req, res) => {
    try{
        console.log(req.params.player_id);
        const {player_id} = req.params;
        // select * from player where player_id = 1
        const player = await Player.findOne({
            where: {player_id},
            // Join
            include: [
                {
                    model: Profile,
                    attributes: ['position', 'salary']
                }
            ]
        });
        res.json(player);
    }catch(err){
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}
exports.postPlayer = async(req, res)=>{
    try{
        console.log(req.body);
        const {name, age, team_id} = req.body;
        const newPlayer = await Player.create({
            name, age, team_id
        });
        res.json(newPlayer)
    }catch(err){
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}
exports.patchPlayer = async(req, res)=>{
    try{
        console.log(req.body);
        const { player_id } = req.params;
        const { team_id } = req.body;

        const updatedPlayer = await Player.update(
            //무엇을 바꿀 것인가
            {team_id},
            // 누구를 바꿔야 하는가
            {where: { player_id }}
        );
        res.json(updatedPlayer);
    }catch(err){
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}
exports.deletePlayer = async(req, res)=>{
    try{
        const {player_id} = req.params;
        const isDeleted = await Player.destroy({
            where: { player_id }
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
exports.getPlayers