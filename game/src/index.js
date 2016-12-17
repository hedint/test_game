// commonjs
require('pixi');
require('p2');
require('phaser');


var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game');

var PhaserGame = function () {
    this.player = null;
    this.platforms = null;
    this.sky = null;
    this.jumpTimer = 0;
    this.wasStanding = false;
    this.cursors = null;
    this.circle = null;
};
PhaserGame.fn = PhaserGame.prototype;
PhaserGame.fn.init = function () {
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.gravity.y = 650;
    //this.physics.arcade.skipQuadTree = false;
};
PhaserGame.fn.preload = function () {
    this.load.baseURL = 'http://files.phaser.io.s3.amazonaws.com/codingtips/issue003/';
    this.load.crossOrigin = 'anonymous';
    this.load.image('trees', 'assets/trees.png');
    this.load.image('clouds', 'assets/clouds.png');
    this.load.image('platform', 'assets/platform.png');
};

PhaserGame.fn.create = function () {
    this.stage.backgroundColor = '#2f9acc';
    this.sky = this.add.tileSprite(0, 0, 800, 600, 'clouds');
    this.sky.fixedToCamera = true;

    this.platforms = this.add.physicsGroup();
    var x = 0, y = 300, i, type = 'platform', platform;
    for ( i = 0; i < 6; i++ ) {
        platform = this.platforms.create(x, y, type);
        x+= 142;
    }
    this.platforms.setAll('body.allowGravity', false);
    this.platforms.setAll('body.immovable', true);



    this.createPlayer();
    this.createBullet();
    this.cursors = this.input.keyboard.createCursorKeys();
};
PhaserGame.fn.update = function () {

    this.physics.arcade.collide(this.player, this.platforms, null, null, this);
    this.player.body.velocity.x = 0;



    //  Do this AFTER the collide check, or we won't have blocked/touching set
    var standing = this.player.body.blocked.down || this.player.body.touching.down;

    if (this.cursors.left.isDown)
    {
        this.player.body.velocity.x = -100;
        this.player.scale.x = 1;

    }
    else if (this.cursors.right.isDown)
    {
        this.player.body.velocity.x = 100;
        this.player.scale.x = -1;
    }

    if (!standing && this.wasStanding)
    {
        this.edgeTimer = this.time.time + 250;
    }

    //  Allowed to jump?
    if ((standing || this.time.time <= this.edgeTimer) && this.cursors.up.isDown && this.time.time > this.jumpTimer)
    {
        this.player.body.velocity.y = -300;
        this.jumpTimer = this.time.time + 750;
    }

    this.wasStanding = standing;



};

PhaserGame.fn.createPlayer = function () {
    var dudeData = [
        '.......1.....',
        '......333....',
        '....5343335..',
        '...332333333.',
        '..33333333333',
        '..37773337773',
        '..38587778583',
        '..38588888583',
        '..37888888873',
        '...333333333.',
        '.F....5556...',
        '3E34.6757.6..',
        '.E.55.666.5..',
        '......777.5..',
        '.....6..7....',
        '.....7..7....'
    ];

    this.game.create.texture('phaserDude', dudeData, 4, 4, 0);
    this.player = this.add.sprite(200, 200, 'phaserDude');
    this.player.anchor.set(0.5);
    this.physics.arcade.enable(this.player);
    this.player.body.collideWorldBounds = true;

};

PhaserGame.fn.createBullet = function () {

    var circleData = [
        '.123456789ABCDEF.',
        '.123456789ABCDEF.',
        '.123456789ABCDEF.',
        '.123456789ABCDEF.',
        '.123456789ABCDEF.'
    ];

    var circleData = [
        '.3.',
        '333',
        '.3.'
    ];
    this.game.create.texture('phaserCircle', circleData, 2, 2, 0);
    this.circle = this.add.sprite(100, 100, 'phaserCircle');
};


game.state.add('Game', PhaserGame, true);
