#include "Control.h"

#include <allegro5/allegro.h>

/*
    Keyboard file contains all classes and functions that handle user's input.
*/

void handle_keyboard(ALLEGRO_EVENT events) {

    if (events.type == ALLEGRO_EVENT_KEY_CHAR) {
        switch (events.keyboard.keycode) {

        case ALLEGRO_KEY_RIGHT:
            break;


        case ALLEGRO_KEY_LEFT:
            break;


        case ALLEGRO_KEY_ENTER:
            break;


        case ALLEGRO_KEY_BACKSPACE:
            break;

        }
    }
}