// ======================================
// PROYECTO 10 DE AGOSTO - LOGICA
// ======================================

const envelope = document.getElementById("envelope");
const preview = document.getElementById("preview");

let opened = false;

// ---------------------------
// Abrir el sobre con el mensaje de Salomé
// ---------------------------
envelope.addEventListener("click", () => {
    if(opened) return;
    opened = true;

    envelope.classList.add("open");

    preview.innerHTML = `
        <strong>Hola, Salomé.</strong>
        <span style="font-size: 0.85rem; opacity: 0.6; display: block; margin-bottom: 15px;">Escrito el 04 de agosto de 2026</span>
        <br>
        Hoy caí en cuenta de que ya casi se cumple un mes desde que empezamos a hablar.
        <br><br>
        Y me dieron ganas de escribirte.
        <br><br>
        Puede que un mes no parezca mucho, pero cuando miro hacia atrás siento que en este tiempo han cabido muchas cosas. Conversaciones que me hicieron reír, otras que me hicieron pensar y algunas que, aunque fueron incómodas, hoy agradezco muchísimo que hayamos tenido.
        <br><br>
        Hay algo con lo que quería empezar este mensaje: <strong>darte las gracias.</strong>
        <br><br>
        Gracias por la confianza que has puesto en mí durante este mes. Gracias por dejarme conocerte poco a poco y por permitirme entrar, aunque sea un poquito, en tu mundo. Nunca he sentido que me debas eso, así que cada vez que compartes algo de ti lo recibo con mucho cariño y con mucho respeto.
        <br><br>
        A veces también me causa gracia pensar que hace apenas un mes éramos dos personas que prácticamente no se conocían. Y, sin darme cuenta, hoy ya hay conversaciones contigo que recuerdo con una sonrisa. Me parece bonito cómo, poco a poco, alguien puede ir encontrando un lugar en la vida de otro.
        <br><br>
        Hay algo que este mes me hizo admirarte mucho más: la forma en la que elegiste ser honesta conmigo, incluso cuando era una conversación que podía incomodarnos a los dos.
        <br><br>
        Sé que aquel momento no fue fácil. Aun así, preferiste hablarme desde lo que realmente sentías. Pudiste haber evitado esa conversación o decir algo que hiciera todo más sencillo, pero elegiste la sinceridad. Y eso hizo que te admirara todavía más.
        <br><br>
        No porque me dijeras lo que quería escuchar, sino precisamente porque no lo hiciste.
        <br><br>
        Después de hablar contigo ese día me quedé con una sensación muy bonita: la de saber que podíamos hablar de cosas difíciles sin dejar de cuidarnos. Creo que esa conversación, lejos de alejarnos, nos permitió conocernos desde un lugar mucho más real. Y eso es algo que valoro muchísimo.
        <br><br>
        También quiero pedirte perdón por algo.
        <br><br>
        Con el tiempo entendí que hubo momentos en los que, sin querer, pude hacerte sentir bajo presión. Nunca fue mi intención, pero entiendo que eso no cambia cómo pudiste vivirlo. Si alguna vez fue así, de corazón, perdón.
        <br><br>
        Conocerte me hizo mucha ilusión y, por momentos, dejé que esa ilusión fuera un poco más rápido que nosotros. Hoy entiendo mejor que acompañar a alguien también significa respetar sus tiempos, sus procesos y todo aquello que todavía está intentando entender de sí misma. Gracias por tener la confianza de compartir parte de ese proceso conmigo.
        <br><br>
        También he aprendido que conocerte significa entender que no todo tiene que tener una respuesta inmediata. Hay cosas que necesitan tiempo, conversaciones y simplemente espacio para irse entendiendo. Y creo que aprender eso también ha sido parte de conocerte.
        <br><br>
        Hay algo que he descubierto este mes.
        <br><br>
        <strong>Una de las cosas más bonitas de este mes ha sido descubrir quién eres.</strong>
        <br><br>
        También hay pequeños momentos que, aunque puedan parecer simples, para mí han tenido un significado muy especial. Como nuestras noches viendo Betty.
        <br><br>
        Durante mucho tiempo tuve la costumbre de ver Betty solo, repitiéndola una y otra vez. Era algo que disfrutaba por mi cuenta, una pequeña rutina que ya formaba parte de mí. Por eso, poder empezar a compartir esas noches contigo tuvo un significado mucho más grande de lo que quizá imaginas.
        <br><br>
        Me gustó descubrir que algo que durante tanto tiempo había disfrutado solo podía sentirse diferente simplemente porque ahora estaba compartiéndolo contigo. Terminé asociando esas noches, esas escenas y todas las tonterías que comentábamos con un momento que ahora recuerdo con muchísimo cariño.
        <br><br>
        Y creo que eso es lo bonito de compartir algo con alguien: no necesariamente necesitas descubrir algo nuevo para que se vuelva especial. A veces basta con vivir de una manera diferente algo que ya conocías.
        <br><br>
        Me gusta que podamos hablar de cosas profundas y, unos minutos después, terminar riéndonos por cualquier tontería. Me gusta que contigo las conversaciones se sientan naturales. Me gusta que podamos ser sinceros, incluso cuando no es lo más fácil. Y me gusta que, mientras más te conozco, más razones encuentro para admirarte.
        <br><br>
        Creo que este mes me recordó que las conexiones más bonitas no nacen porque todo salga perfecto. Nacen cuando dos personas deciden escucharse, hablar con honestidad y seguir conociéndose desde ahí.
        <br><br>
        Y eso es algo que agradezco muchísimo de lo que estamos viviendo.
        <br><br>
        Hay algo que ya sabes, pero igual quería recordártelo.
        <br><br>
        <strong>Te quiero mucho.</strong>
        <br><br>
        Y no te lo digo esperando que signifique algo distinto a lo que ya significa. Te lo digo porque me nace hacerlo, porque me alegra muchísimo haberte conocido y porque me siento muy agradecido de que nuestras vidas se hayan cruzado.
        <br><br>
        Gracias por este primer mes, Salomé.
        <br><br>
        Gracias por tu confianza, por tu honestidad y por todo lo que me has permitido conocer de ti.
        <br><br>
        De verdad me alegra muchísimo haberte encontrado.
        <br><br>
        <strong>Te quiero. </strong>
    `;
});

// ---------------------------
// Movimiento suave 3D del escritorio (Mouse)
// ---------------------------
const desk = document.querySelector(".desk");

document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 12;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;

    desk.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
});

// ---------------------------
// Animación flotante temática
// ---------------------------
const objects = document.querySelectorAll(
    ".spiderman-badge, .lego-brick, .f1-car, .snoopy-icon, .mj-silhouette, .before-trilogy, .turtle-icon"
);

objects.forEach((item, index) => {
    const currentStyle = window.getComputedStyle(item).transform;
    const baseTransform = currentStyle !== 'none' ? currentStyle : '';

    item.animate(
        [
            { transform: `${baseTransform} translateY(0px)` },
            { transform: `${baseTransform} translateY(-8px)` },
            { transform: `${baseTransform} translateY(0px)` }
        ],
        {
            duration: 3500 + index * 250,
            iterations: Infinity,
            easing: "ease-in-out"
        }
    );
});

// ---------------------------
// Destello del sello (Latido)
// ---------------------------
const seal = document.querySelector(".wax-seal");

setInterval(() => {
    if (!opened) {
        seal.animate(
            [
                { transform: "translate(-50%,-50%) scale(1)" },
                { transform: "translate(-50%,-50%) scale(1.08)" },
                { transform: "translate(-50%,-50%) scale(1)" }
            ],
            { duration: 900 }
        );
    }
}, 4500);
