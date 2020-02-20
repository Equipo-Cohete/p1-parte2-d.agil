// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

jQuery.fx.off = false
/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>Bienvenido a nuestro primer juego en Undum</h1>\
        <img src='media/games/tutorial/woodcut1.png' class='float_right'>\
        <p>Este es nuestro primer juego en Undum. Lo hemos realizado para\
        tener un primer contacto con esta framework.</p>\
        <p>En este peque&ntildeo juego presentamos una historia que ocurre el\
        día del examen final de desarrollo ágil</p>\
        <p class='transient'>Click <a href='levantarse'>aquí para empezar...</a></p>"
    ),
    levantarse: new undum.SimpleSituation(
        "<h1>29 de Mayo a las 7 de la mañana</h1>\
        <p>Te levantas un viernes, 29 de mayo a las 7 de la mañana. Te preguntas por qué narices estas levantado a estas horas, \
        cuando te das cuenta de que… ¡El examen de desarrollo ágil!</p>\
        <p>Pero entonces resuenan unas palabras en tu cabeza, eran las palabras de Victorcillo, diciendo que nos iba a suspender\
        a todos igualmente, así que se te ocurren 2 opciones:</p>\
        <p class='transient'><a href='final1'>No ir, si total, estoy suspenso.</a></p>\
		<p class='transient'><a href='continuar'>Levantarme e ir, está mal hacerle el feo a Víctor.</a></p>"
    ),
    final1: new undum.SimpleSituation(
        "<h1>Que agusto se está en la cama</h1>\
        <p>Has decidido no levantarte y sigues durmiendo hasta 13:00 de ese mismo día.</p>\
        <p>Te levantas y preguntas a tus compañeros cómo ha salido el examen. Te cuentan que cómo Victor dijo, todo el mundo ha suspendido.</p>\
        <p>Eres feliz, has dormido tus doce horas diarias de sueño y al menos no eres el único que ha suspendido.</p>"
    ),
    continuar: new undum.SimpleSituation(
        "<h1>Hay que ser optimistas siempre</h1>\
        <p>Decides levantarte y avanzar intentando discernir entre la penumbra de tu habitación, esquivando todos los apuntes tirados por el suelo</p>\
        <p class='trasient'>Tengo que <a href='vestirse'>vestirme</a> y <a href='desayunar'>desayunar</a> te dices a ti mismo</p>"	 
    ), 

    vestirse: new undum.SimpleSituation(
        "<h1>Lo pantalones siempre son lo primero</h1>\
        <p>Te vistes de pies a cabeza luchando contra el sueño por no poder dormir tus 12 horitas del día y te encaminas hacia <a href='desayunar2'>desayunar</a></p>"	 
    ),


    desayunar: new undum.SimpleSituation(
        "<h1>Verde que te quiero verde</h1>\
        <p class=trasient>Me preparo un desayuno ligero, sano, con frutita y todo, y me lo tomo mientras me leo el Manifiesto Ágil, como hago todas las mañanas. Y voy a <a href='vestirse2'>vestirme</a></p>"	 
    ),    

    vestirse2: new undum.SimpleSituation(
        "<h1>Lo pantalones siempre son lo primero</h1>\
        <p>Decides levantarte y avanzar intentando discernir entre la penumbra de tu habitación, esquivando todos los apuntes tirados por el suelo. Y me dirigo hacia <a href='salon'>el salon</a></p>"	 
    ), 

    desayunar2: new undum.SimpleSituation(
        "<h1>Verde que te quiero verde</h1>\
        <p class= trasient>Me preparo un desayuno ligero, sano, con frutita y todo, y me lo tomo mientras me leo el Manifiesto Ágil, como hago todas las mañanas. Y me dirigo hacia <a href='salon'>el salon</a></p>"	 
    ), 

    salon: new undum.SimpleSituation(
        "<h1>Ya has terminado</h1>\
        <p>Ahora queda prepararte, tienes que coger la mochila de tu cuarto y coger las llaves del portallaves</p>"	 
    ), 

};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
	mochila: new undum.OnOffQuality(
	"Mochila", {priority:"0001", group:'estudiante', onDisplay:"V"}
 	 ),
  llaves: new undum.OnOffQuality(
  "Llaves", {priority:"0002", group:'estudiante', onDisplay:"V"}
	)
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    estudiante: new undum.QualityGroup('Estudiante', {priority:"0001"}),
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    system.setQuality("mochila", false )
    system.setQuality("llaves", false )
    system.setCharacterText("<p>Estás empezando una fantástico día.</p>");
};
