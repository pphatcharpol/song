input.onButtonPressed(Button.A, function () {
    music.setVolume(100)
    music.setTempo(85)
    Room_1()
    Room_2()
    Room_1()
    Room_3_uncomplete()
    music.playTone(554, music.beat(BeatFraction.Double))
    Room_1()
    Room_2()
    Room_1()
    Room_3_uncomplete()
    music.playTone(554, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Half))
    Room_3_uncomplete()
})
function Room_3_uncomplete () {
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(659, music.beat(BeatFraction.Quarter))
    music.playTone(740, music.beat(BeatFraction.Half))
    music.playTone(622, music.beat(BeatFraction.Half))
}
function Room_2 () {
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(415, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(370, music.beat(BeatFraction.Quarter))
    music.playTone(415, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Half))
}
function Outtro () {
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(622, music.beat(BeatFraction.Whole))
    music.playTone(554, music.beat(BeatFraction.Whole))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Breve))
}
function Room_1 () {
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(740, music.beat(BeatFraction.Half))
    music.playTone(554, music.beat(BeatFraction.Whole))
    music.playTone(622, music.beat(BeatFraction.Whole))
}
