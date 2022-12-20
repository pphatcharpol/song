def on_button_pressed_a():
    music.ring_tone(349)
    music.rest(music.beat(BeatFraction.SIXTEENTH))
input.on_button_pressed(Button.A, on_button_pressed_a)

music.set_volume(100)
music.set_tempo(100)
music.play_tone(494, music.beat(BeatFraction.WHOLE))
music.play_tone(494, music.beat(BeatFraction.WHOLE))
music.play_tone(740, music.beat(BeatFraction.HALF))
music.play_tone(554, music.beat(BeatFraction.WHOLE))
music.play_tone(622, music.beat(BeatFraction.WHOLE))
music.rest(music.beat(BeatFraction.EIGHTH))