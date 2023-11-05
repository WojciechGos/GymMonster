#include <allegro5/allegro.h>
#include <allegro5/allegro_primitives.h>
#include <allegro5/allegro_font.h>
#include <allegro5/allegro_ttf.h>
#include <allegro5/allegro_native_dialog.h>
#include <allegro5/allegro_image.h>


#include "Engine.h"
#include "Control.h"
#include "Interface.h"
#include "Player.h"

#include <iostream>

#define screenWidth 1800
#define screenHeight 900

int SCREEN_POSITION_X = 30;
int SCREEN_POSITION_Y = 30;




bool handle_events(ALLEGRO_EVENT event);

void init() {


	/*
		INITIALIZATION AND INSTALATION
	*/
	ALLEGRO_DISPLAY* display = NULL;
	al_init();
	al_install_keyboard();
	al_init_image_addon();
	al_init_font_addon();
	al_init_ttf_addon();
	al_init_primitives_addon();

	/*
		INITIALIZING VARIABLES
	*/
	ALLEGRO_TIMER* timer = NULL;
	ALLEGRO_EVENT_QUEUE* event_queue = al_create_event_queue();


	//Player player = Player();



	/*
		SETTING WINDOWS PARAMETERS
	*/
	display = al_create_display(screenWidth, screenHeight);
	al_set_new_display_flags(ALLEGRO_WINDOWED);
	al_set_window_position(display, SCREEN_POSITION_X, SCREEN_POSITION_Y);
	al_set_window_title(display, "Boxhead2");

	
	al_register_event_source(event_queue, al_get_display_event_source(display));
	al_register_event_source(event_queue, al_get_keyboard_event_source());





	Movement movement;

	/*
		 MAIN LOOP
	*/

	bool running = true;
	al_flip_display();

	while (running) {
		ALLEGRO_EVENT event;
		al_wait_for_event(event_queue, &event);
		

		handle_keyboard(event, &movement);
		running = handle_events(event);


		render_player(&movement);

		al_flip_display();
		//timer = al_create_timer(2. / (float)1.);
		//al_register_event_source(event_queue, al_get_timer_event_source(timer));
		//al_start_timer(timer);
		//

	}



	al_destroy_display(display);
}

bool handle_events(ALLEGRO_EVENT event) {


	if (event.type == ALLEGRO_EVENT_DISPLAY_CLOSE) {
		return false;
	}

	return true;
}