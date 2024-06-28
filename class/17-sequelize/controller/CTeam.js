const {Team, Player} = require('../models/index');
const {Op} = require('sequelize');
exports.getTeams = async(req, res)=>{
    try{
        const{sort, search} = req.query;
        let teams;
        if(sort === 'name_asc'){
            //이름 기준 오름차순
            teams = await Team.findAll({
                attributes: ['team_id', 'name'],
                order: [['name', 'ASC']]
            });
        }else if(search){
            teams = await Team.findAll({
                attributes: ['team_id', 'name'],
                where: {
                    name: { [Op.like]: `%${search}%`}
                }
            })
        }else{
            //전체 조회
            teams = await Team.findAll({
                attributes: ['team_id', 'name']
        
        
        });
    }
        res.json(teams);
    }catch(err){
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}
exports.getTeam = async (req, res)=>{
    try{
        console.log(req.params);
        const {team_id} = req.params;
        const teamid = await Team.findOne({
            where: {team_id}
        });
        res.json(teamid)
    }catch(err){
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}
exports.getTeamPlayers = async (req,res)=>{
    try{
        const {team_id} = req.params;
        const teamid = await Team.findOne({
            where: {team_id},
            include: [
                {
                    model: Player
                }
            ]
        });
        res.json(teamid)
    }catch(err){
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}