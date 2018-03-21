class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    const $square = $("li");

    $square.on("click", (e) => {
      const $tile = $(e.currentTarget);
      this.makeMove($tile);
    });
  }

  makeMove($square) {
    const $pos = $square.data("pos");
    const mark = this.game.currentPlayer;
    try {
      this.game.playMove($pos);

    } catch (e) {
      alert("This " + e.msg.toUpperCase());
      return;
    }

    if (mark === 'x') {
      $($square).addClass("x:after");
      $($square).css('background-color', 'yellowgreen');
    } else {
      $($square).addClass("o:after");
      $($square).css('background-color', 'skyblue');
    }
  }

  setupBoard() {
    const $row = $("<ul>").addClass("row");

    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (let colIdx = 0; colIdx < 3; colIdx++) {
        const $tile = $("<li>").addClass("tile").data("pos", [rowIdx, colIdx]);
        $row.append($tile);
      }
    }

    this.$el.append($row);
  }
}

module.exports = View;
