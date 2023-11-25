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
#include "Gameplay.h"

#include <iostream>

#define screenWidth 1800
#define screenHeight 900

#define FPS 60.0

#define MOVE 5

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
	ALLEGRO_TIMER* enemy_timer = NULL;
	timer = al_create_timer(1. / (float)FPS);
	enemy_timer = al_create_timer(1.0);
	ALLEGRO_EVENT_QUEUE* event_queue = al_create_event_queue();

	ALLEGRO_DISPLAY* display = NULL;

	// Player create
	Player player(INITIAL_PLAYER_POSITION_X, INITIAL_PLAYER_POSITION_Y);

	Gameplay gameplay;


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
	al_register_event_source(event_queue, al_get_timer_event_source(enemy_timer));
	al_start_timer(timer);
	al_start_timer(enemy_timer);



	


	/*
		 MAIN LOOP
	*/
	bool running = true;
	al_flip_display();

	while (running) {
		ALLEGRO_EVENT event;
		al_wait_for_event(event_queue, &event);

		drawMap();
		player.drawLifeBar();


		/*
			EVENT HANDLERS
		*/
		handle_keyboard(event, &player, &gameplay);
		if (event.type == ALLEGRO_EVENT_DISPLAY_CLOSE) {
			running = false;
		}
		gameplay.run(event, enemy_timer);
		/*
			DRAW
		*/
		for (int i = 0; i < gameplay.enemies.size(); ++i) {
			gameplay.enemies[i].updatePosition(&player.position);
			gameplay.enemies[i].render(event, &player.position);
		}
		player.render(event);

		al_flip_display();

	}

	al_destroy_display(display);
	al_destroy_timer(timer);
	al_destroy_event_queue(event_queue);
}



/*
	Function handle_keyboard is responsible for player movement.
*/
void Engine::handle_keyboard(ALLEGRO_EVENT event, Player* player, Gameplay* gameplay) {

	ALLEGRO_KEYBOARD_STATE keyState;
	if (event.type == ALLEGRO_EVENT_KEY_DOWN) {
		if (event.keyboard.keycode == ALLEGRO_KEY_SPACE) {

				std::cout << "FIRE" << std::endl;
				player->shot(gameplay);
			
		}
	}

	if (event.type == ALLEGRO_EVENT_TIMER) {
		al_get_keyboard_state(&keyState);

		player->position.setActive(true);
		if (al_key_down(&keyState, ALLEGRO_KEY_D))
		{
			player->position.setX(player->position.getX() + MOVE);
			player->position.setDirection(64);
		}
		else if (al_key_down(&keyState, ALLEGRO_KEY_A))
		{
			player->position.setX(player->position.getX() - MOVE);
			player->position.setDirection(32);
		}
		else if (al_key_down(&keyState, ALLEGRO_KEY_W))
		{
			player->position.setY(player->position.getY() - MOVE);
			player->position.setDirection(96);
		}
		else if (al_key_down(&keyState, ALLEGRO_KEY_S))
		{
			player->position.setY(player->position.getY() + MOVE);
			player->position.setDirection(0);
		}
		else
			player->position.setActive(false);
	}
}

void Engine::handle_mouse() {


	// iasiudiasubdfboszafuhgs
}


