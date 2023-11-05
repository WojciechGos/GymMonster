#include <allegro5/allegro.h>
#include <allegro5/allegro_primitives.h>
#include <allegro5/allegro_font.h>
#include <allegro5/allegro_ttf.h>
#include <allegro5/allegro_native_dialog.h>

#include "Engine.h"
#include "Control.h"
#include "Interface.h"
#include <iostream>

#define screenWidth 1800
#define screenHeight 900

int SCREEN_POSITION_X = 30;
int SCREEN_POSITION_Y = 30;



bool handle_events(ALLEGRO_EVENT event);

void init() {
	// initiation 
	ALLEGRO_DISPLAY* display = NULL;
	al_init();
	al_install_keyboard();
	al_init_font_addon();
	al_init_ttf_addon();
	al_init_primitives_addon();



	/*
		SETTING WINDOWS PARAMETERS
	*/
	display = al_create_display(screenWidth, screenHeight);
	al_set_new_display_flags(ALLEGRO_WINDOWED);
	al_set_window_position(display, SCREEN_POSITION_X, SCREEN_POSITION_Y);
	al_set_window_title(display, "Boxhead2");

	ALLEGRO_EVENT_QUEUE* event_queue = al_create_event_queue();

	if (!event_queue) {
		std::cerr << "B³¹d inicjalizacji okna." << std::endl;
		return;
	}
		


	al_register_event_source(event_queue, al_get_display_event_source(display));
	al_register_event_source(event_queue, al_get_keyboard_event_source());


	/*
		 MAIN LOOP
	*/


	bool running = true;
	al_flip_display();
	while (running) {
		ALLEGRO_EVENT event;
		al_wait_for_event(event_queue, &event);
		

		running = handle_events(event);

	}



	al_destroy_display(display);
}

bool handle_events(ALLEGRO_EVENT event) {
	handle_keyboard(event);

	if (event.type == ALLEGRO_EVENT_DISPLAY_CLOSE) {
		return false;
	}

	return true;
}