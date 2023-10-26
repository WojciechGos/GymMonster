#include <allegro5/allegro.h>
#include <allegro5/allegro_primitives.h>
#include <allegro5/allegro_font.h>
#include <allegro5/allegro_ttf.h>
#include <allegro5/allegro_native_dialog.h>

#include "Engine.h"


#define screenWidth 1800
#define screenHeight 1350

int SCREEN_POSITION_X = 50;
int SCREEN_POSITION_Y = 50;

void init() {
	// initiation 
	ALLEGRO_DISPLAY* display = NULL;
	al_init();


	// setting window parameters
	display = al_create_display(screenWidth, screenHeight);



	al_set_new_display_flags(ALLEGRO_WINDOWED);
	al_get_window_position(display, &SCREEN_POSITION_X, &SCREEN_POSITION_Y);
	al_set_window_title(display, "Boxhead2");


	while (true) {

	}

	al_destroy_display(display);
}


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
