const View = require ('./ttt-view.js');
const Game = require ('../../TicTacToe_solution/game.js');

$( () => {
  const $game = new Game();
  const $el = $("figure");
  new View($game, $el);
});
