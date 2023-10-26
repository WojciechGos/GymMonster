#include <allegro5/allegro.h>
//#include <allegro5/allegro_primitives.h>
//#include <allegro5/allegro_font.h>
//#include <allegro5/allegro_ttf.h>
//#include <allegro5/allegro_native_dialog.h>

#include "Engine.h"
#include "Control.h"
#include "Interface.h"

#define screenWidth 1800
#define screenHeight 900

int SCREEN_POSITION_X = 30;
int SCREEN_POSITION_Y = 30;

void init() {
	// initiation 
	ALLEGRO_DISPLAY* display = NULL;
	al_init();


	/*
		SETTING WINDOWS PARAMETERS
	*/
	display = al_create_display(screenWidth, screenHeight);
	al_set_new_display_flags(ALLEGRO_WINDOWED);
	al_set_window_position(display, SCREEN_POSITION_X, SCREEN_POSITION_Y);
	al_set_window_title(display, "Boxhead2");

	/*
		 MAIN LOOP
	*/
	while (true) {

	}



	al_destroy_display(display);
}

