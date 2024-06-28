const Sequelize = require('sequelize'); // sequelize 패키지르 ㄹ불러옴
const config = require(__dirname + '/../config/config.json')["development"]; // db 연결 정보를 불러옴
const db = {}; // 빈 객체 생성

const sequelize = new Sequelize(config.database, config.username, config.password, config);
// sequelize 객체를 만듦.

//모델 불러오기
const PlayerModel = require('./Player')(sequelize, Sequelize);
const ProfileModel = require('./Profile')(sequelize, Sequelize);
const TeamModel = require('./Team')(sequelize, Sequelize);
const GameModel = require('./Game')(sequelize, Sequelize);
const TeamGameModel = require('./TeamGame')(sequelize, Sequelize);

// 모델간 관계 연결
// 1) Player : Profile = 1 : 
// 하나의 선수당 하나의 프로필을 가짐
PlayerModel.hasOne(ProfileModel, {
  // CASECADE 옵션: Player 가 삭제/수정되느 ㄴ경우 Profile도 함께 삭제/ 업데이트
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    //ProfileModel에 'player_id' 이름의 fk 생성
    ForeignKey: 'player_id',
    //PlayerModel 'player_id' 컬럼 참조
    sourceKey: 'player_id'
  });
ProfileModel.belongsTo(PlayerModel, {
  // ProfileModel에 'palyer_id' fk 생성
  foreignKey: 'player_id',
  // 참조 하게 될 PlayerModel의 키는 'player_id' 다
  targetKey: 'player_id'
})

// 2) Team : Plyer = 1 : N
// 한 팀에는 여러 명의 선수가 존재
TeamModel.hasMany(PlayerModel,{
  // PlayerModel에 'team_id' fk 생성
  foreignKey: 'team_id',
  //TeamModel에서 참조될 키가 'team_id'
  sourceKey: 'team_id'
});
PlayerModel.belongsTo(TeamModel,{
  // PlayerModel에 'team_id' fk 생성
  foreignKey: 'team_id',
  // 참조하게 될 TeamModel의 키는 'team_id'
  targetKey: 'team_id'
});

// 3) Team : Game = N :M
// 하나의 팀은 여러 게임이 가능하고 한 게임에는 여러ㅣ팀이 참여한다.
// 두 모델의 고나계 모델은 TeamGameModel
TeamModel.belongsToMany(GameModel, {
  through: TeamGameModel, // 중계(관계) 테이블
  foreignkey: 'team_id', // TeamGameModel에서 TeamModel을 참조하는 fk
  otherKey: 'game_id' // TeamGameModel에서 GameModel을 참조하는 fk
});
GameModel.belongsToMany(TeamModel, {
  through: TeamGameModel,
  foreignKey: 'game_id',
  otherKey: 'team_id'
});

db.sequelize = sequelize; 
db.Sequelize = Sequelize;
// db = {sequelize: sequelize, Sequelize: Sequelize }

db.Player = PlayerModel;
db.Profile = ProfileModel;
db.Team = TeamModel;
// db = {sequelize: sequelize, Sequelize: Sequelize, Player: PlayerModel 
module.exports = db;
// db 객체를 모듈로 내보냄 (-> 다른 파일에서 db 모듈을 사용 할 예정)
