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
        d�a del examen final de desarrollo �gil</p>\
        <p class='transient'>Click <a href='levantarse'>aqu� para empezar...</a></p>"
    ),
    levantarse: new undum.SimpleSituation(
        "<h1>29 de Mayo a las 7 de la ma�ana</h1>\
        <p>Te levantas un viernes, 29 de mayo a las 7 de la ma�ana. Te preguntas por qu� narices estas levantado a estas horas, \
        cuando te das cuenta de que� �El examen de desarrollo �gil!</p>\
        <p>Pero entonces resuenan unas palabras en tu cabeza, eran las palabras de Victorcillo, diciendo que nos iba a suspender\
        a todos igualmente, as� que se te ocurren 2 opciones:</p>\
        <p class='transient'><a href='final1'>No ir, si total, estoy suspenso.</a></p>\
		<p class='transient'><a href='levantarse'>Levantarme e ir, est� mal hacerle el feo a V�ctor.</a></p>"
    ),
    final1: new undum.SimpleSituation(
        "<h1>Que agusto se est� en la cama</h1>\
        <p>Has decidido no levantarte y sigues durmiendo hasta 13:00 de ese mismo d�a.</p>\
        <p>Te levantas y preguntas a tus compa�eros c�mo ha salido el examen. Te cuentan que c�mo Victor dijo, todo el mundo ha suspendido.</p>\
        <p>Eres feliz, has dormido tus doce horas diarias de sue�o y al menos no eres el �nico que ha suspendido.</p>"
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
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    system.setCharacterText("<p>Est�s empezando una fant�stico d�a.</p>");
};
