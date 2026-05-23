class Test_Past extends Phaser.Scene {
    constructor() {
        super("test_past");
    }

    preload() {
    }

    create() {
        // Text and key input to switch scenes
        let keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        keyE.on('down', () => {
            this.scene.start('test_future'); 
        });
        let past = this.add.text(960, 540, "You are in the past! Press E to go to the future.\nWASD to move", { fontSize: '32px', fill: '#ffffff' })
            .setOrigin(0.5);

        // Player
        this.player = this.physics.add.sprite(100, 450, 'dude');
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        
        // Keys
        this.wasd = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D
        });
    }

    update() {
        if (this.wasd.left.isDown) {
            this.player.setVelocityX(-160);
            this.player.anims.play('left', true);
        } else if (this.wasd.right.isDown) {
            this.player.setVelocityX(160);
            this.player.anims.play('right', true);
        } else {
            this.player.setVelocityX(0);
            this.player.anims.play('turn');
        }
    }
}

class Test_Future extends Phaser.Scene {
    constructor() {
        super("test_future");
    }
z
    preload() {
    }

    create() {
        // Text and key input to switch scenes
        let keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        keyE.on('down', () => {
            this.scene.start('test_past'); 
        });
        let future = this.add.text(960, 540, "You are in the future! Press E to go to the past.\nWASD to move", { fontSize: '32px', fill: '#ffffff' })
            .setOrigin(0.5);

        // Player
        this.player = this.physics.add.sprite(100, 450, 'dude');
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        // Keys
        this.wasd = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D
        });
    }

    update() {
        if (this.wasd.left.isDown) {
            this.player.setVelocityX(-160);
            this.player.anims.play('left', true);
        } else if (this.wasd.right.isDown) {
            this.player.setVelocityX(160);
            this.player.anims.play('right', true);
        } else {
            this.player.setVelocityX(0);
            this.player.anims.play('turn');
        }
    }
}

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 }, // Gravity pulls the player down
            debug: false
        }
    },
    scene: [Test_Past, Test_Future],
    title: "Time Crime",
});