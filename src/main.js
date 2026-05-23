class Test_Past extends Phaser.Scene {
    constructor() {
        super("test_past");
    }

    preload() {
    }

    create() {
        let keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        keyE.on('down', () => {
            this.scene.start('test_future'); 
        });
        let past = this.add.text(960, 540, "You are in the past! Press E to go to the future.", { fontSize: '32px', fill: '#ffffff' })
            .setOrigin(0.5);
    }
}

class Test_Future extends Phaser.Scene {
    constructor() {
        super("test_future");
    }

    preload() {
    }

    create() {
        let keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        keyE.on('down', () => {
            this.scene.start('test_past'); 
        });
        let future = this.add.text(960, 540, "You are in the future! Press E to go to the past.", { fontSize: '32px', fill: '#ffffff' })
            .setOrigin(0.5);
    }
}

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Test_Past, Test_Future],
    title: "Time Crime",
});