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
#include "Enemy.h"

#include <iostream>

#define screenWidth 1800
#define screenHeight 900

#define FPS 60.0

int SCREEN_POSITION_X = 30;
int SCREEN_POSITION_Y = 30;



#include "Engine.h"

Engine::Engine() {
	
}

void Engine::init() {

	/*
		INITIALIZATION AND INSTALATION
	*/
	al_init();
	al_install_keyboard();
	al_init_image_addon();
	al_init_font_addon();
	al_init_ttf_addon();
	al_init_primitives_addon();

	
}

void Engine::run() {
	/*
		INITIALIZING VARIABLES
	*/
	ALLEGRO_TIMER* timer = NULL;
	ALLEGRO_EVENT_QUEUE* event_queue = al_create_event_queue();
	timer = al_create_timer(1. / (float)FPS);
	ALLEGRO_DISPLAY* display = NULL;

	//Player player = Player();



	/*
		SETTING WINDOWS PARAMETERS
	*/
	display = al_create_display(screenWidth, screenHeight);
	al_set_new_display_flags(ALLEGRO_WINDOWED);
	al_set_window_position(display, SCREEN_POSITION_X, SCREEN_POSITION_Y);
	al_set_window_title(display, "Boxhead2");


	/*
		REGISTER EVENTS
	*/
	al_register_event_source(event_queue, al_get_display_event_source(display));
	al_register_event_source(event_queue, al_get_keyboard_event_source());
	al_register_event_source(event_queue, al_get_timer_event_source(timer));
	al_start_timer(timer);



	// Player create
	Movement player_movement(INITIAL_PLAYER_POSITION_X, INITIAL_PLAYER_POSITION_Y);

	// Create initial enemies
	int enemy_count = INITIAL_ENEMY_NUMBER;

	Movement enemy_movement[INITIAL_ENEMY_NUMBER];

	for (int i = 0; i < INITIAL_ENEMY_NUMBER; ++i) {
		enemy_movement[i].setX(INITIAL_ENEMY_POSITION_X);
		enemy_movement[i].setY(INITIAL_ENEMY_POSITION_Y);
	}




	/*
		 MAIN LOOP
	*/


	bool running = true;
	al_flip_display();

	while (running) {
		ALLEGRO_EVENT event;
		al_wait_for_event(event_queue, &event);

		drawMap();
		drawLifeBar();


		/*
			EVENT HANDLERS
		*/
		handle_keyboard(event, &player_movement);
		if (event.type == ALLEGRO_EVENT_DISPLAY_CLOSE) {
			running = false;
		}



		/*
			DRAW
		*/
		for (int i = 0; i < enemy_count; ++i) {
			update_enemy_position(&enemy_movement[i], &player_movement);
			render_enemy(&enemy_movement[i]);
		}
		render_player(&player_movement);


		al_flip_display();
		//timer = al_create_timer(2. / (float)1.);
		//al_register_event_source(event_queue, al_get_timer_event_source(timer));
		//al_start_timer(timer);
		//

	}

	al_destroy_display(display);
	al_destroy_timer(timer);
	al_destroy_event_queue(event_queue);
}



