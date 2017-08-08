$(function() {
  init();
  console.log("Main init called");
});

function initFilesRanksBrd() {

  var index = 0;
  var file = FILES.FILE_A;
  var rank = RANKS.RANK_1;
  var sq = SQUARES.A1;

  for(index = 0; index < BRD_SQ_NUM; ++index ) {
    FilesBrd[index] = SQUARES.OFFBOARD;
  }

}

function init() {
  console.log("init");
}
