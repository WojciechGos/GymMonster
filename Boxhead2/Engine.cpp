#include <allegro5/allegro.h>
#include <allegro5/allegro_primitives.h>
#include <allegro5/allegro_font.h>
#include <allegro5/allegro_ttf.h>
#include <allegro5/allegro_native_dialog.h>

#include "Engine.h"


#define screenWidth 2500
#define screenHeight 1350


void init() {
	ALLEGRO_DISPLAY* display = NULL;
	al_init();
	display = al_create_display(screenWidth, screenHeight);

	while (true) {

	}
}
