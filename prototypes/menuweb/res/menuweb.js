  'use strict';

  var MW = MW || {};

  MW.menuInput = {
    "102": { codigo:"102", nombre:"ALBAHACA", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella y albahaca" },
    // <li class="menuItem" title="pizza: Salsa de tomate, muzzarella y albahaca">102 ALBAHACA</li>
    "103": { codigo:"103", nombre:"ANANA con JAMON", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella, rodajas de ananá y jamón cocido natural." },
    "104": { codigo:"104", nombre:"ANANA", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella y rodajas de ananá." },
    "106": { codigo:"106", nombre:"ANCHOAS", rubro:1, descripcion:"pizza: Salsa de tomate y filetes de anchoas." },
    "107": { codigo:"107", nombre:"Atún", rubro:1, descripcion:"pizza: Muzzarella, lomito de atún al natural, rodajas de tomate y cebolla" },
    "108": { codigo:"108", nombre:"ATOMICA", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella, anchoas, morrones, longaniza y jamón cocido natural" },
    "109": { codigo:"109", nombre:"ATUN", rubro:1, descripcion:"pizza: Rodajas de cebolla y lomitos de atún." },
    "110": { codigo:"110", nombre:"BERENJENAS", rubro:1, descripcion:"pizza: Salsa de tomate, espinaca, berenjenas asadas, muzzarella y morrones (ajo a gusto)." },
    "111": { codigo:"111", nombre:"BOMBA", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella, anchoas, longaniza y morrón" },
    "112": { codigo:"112", nombre:"Bondiola", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella, morrones y bondiola" },
    "113": { codigo:"113", nombre:"CALABRESA", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella y longaniza." },
    "114": { codigo:"114", nombre:"CANTIMPALO", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella, morrones y cantimpalo." },
    "115": { codigo:"115", nombre:"Caprese", rubro:1, descripcion:"pizza: Muzzarella, tomate, albahaca y aceitunas negras" },
    "116": { codigo:"116", nombre:"CEBOLLA", rubro:1, descripcion:"pizza: Rodajas de cebolla." },
    "117": { codigo:"117", nombre:"CHAMPIGNONES", rubro:1, descripcion:"pizza: Jamón cocido natural, muzzarella, cebolla de verdeo y champignones frescos." },
    "118": { codigo:"118", nombre:"DOBLE MUZZARELLA", rubro:1, descripcion:"pizza: Salsa de tomate y doble porción de muzzarella." },
    "119": { codigo:"119", nombre:"DON GRILLO", rubro:1, descripcion:"pizza: Pizza rellena con muzzarella, jamón cocido natural, longaniza, y morrón, cubierta con provolone" },
    "120": { codigo:"120", nombre:"ESPARRAGOS", rubro:1, descripcion:"pizza: Salsa de tomate, salsa blanca, muzzarella, esparragos, cebolla de verdeo y provolone rallado." },
    "121": { codigo:"121", nombre:"FIORENTINA", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella, rodajas de tomate, longaniza y huevo picado." },
    "122": { codigo:"122", nombre:"FUGAZZETTA con JAMON", rubro:1, descripcion:"pizza: Muzzarella, rodajas de cebolla y jamón cocido natural." },
    "123": { codigo:"123", nombre:"FUGAZZETTA con JAMON y PROVOLONE", rubro:1, descripcion:"pizza: Rodajas de cebolla, muzzarella, jamón cocido natural y provolone." },
    "124": { codigo:"124", nombre:"FUGAZZETTA con PROVOLONE", rubro:1, descripcion:"pizza: Rodajas de cebolla, muzzarella y provolone." },
    "125": { codigo:"125", nombre:"FUGAZZETTA", rubro:1, descripcion:"pizza: Muzzarella y rodajas de cebolla." },
    "126": { codigo:"126", nombre:"HUEVO", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella y huevo picado." },
    "127": { codigo:"127", nombre:"HUMITA", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella y choclo desgranado." },
    "128": { codigo:"128", nombre:"JAMóN y HUEVO", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella, jamón cocido natural y huevo picado." },
    "129": { codigo:"129", nombre:"JAMON", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella y jamón cocido natural." },
    "130": { codigo:"130", nombre:"JAMON y MORRONES", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella, morrones y jamón cocido natural." },
    "131": { codigo:"131", nombre:"LA MAQUINA", rubro:1, descripcion:"pizza: Salsa de tomate, jamón cocido natural, muzzarella, morrones asados, huevo picado y aceitunas negras trozadas." },
    "132": { codigo:"132", nombre:"MORRONES", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella y morrones asados." },
    "133": { codigo:"133", nombre:"MUZZARELLA con ANCHOAS", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella y filetes de anchoas." },
    "134": { codigo:"134", nombre:"MUZZARELLA", rubro:1, descripcion:"pizza: Salsa de tomate y muzzarella." },
    "135": { codigo:"135", nombre:"NAPOLITANA con JAMON", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella, rodajas de tomate, jamón cocido natural y albahaca. (ajo a gusto)." },
    "136": { codigo:"136", nombre:"NAPOLITANA", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella, rodajas de tomate y albahaca (ajo a gusto)." },
    "137": { codigo:"137", nombre:"NAVIDEÑA", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella, morrones asados, rodajas de ananá, champignones, tomates secos y rúcula." },
    "138": { codigo:"138", nombre:"PALMITOS con JAMóN", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella, palmitos, jamón cocido natural y huevo picado." },
    "139": { codigo:"139", nombre:"PALMITOS", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella, palmitos y huevo picado." },
    "140": { codigo:"140", nombre:"PANCETA A CABALLO", rubro:1, descripcion:"pizza: Muzzarella, rodajas de cebolla, panceta y huevos." },
    "141": { codigo:"141", nombre:"PANCETA", rubro:1, descripcion:"pizza: Muzzarella, rodajas de cebolla y panceta." },
    "142": { codigo:"142", nombre:"PAPA-CHICHA", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella, rodajas de salchicha y papas pay." },
    "143": { codigo:"143", nombre:"PIZZAIOLA", rubro:1, descripcion:"pizza: Salsa de tomate y ajo picado." },
    "144": { codigo:"144", nombre:"PROVOLONE con JAMóN", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella y provolone. Y jamon cocido natural" },
    "145": { codigo:"145", nombre:"PROVOLONE", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella y provolone." },
    "146": { codigo:"146", nombre:"ROMANA", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella, rodajas de tomate y huevo picado." },
    "147": { codigo:"147", nombre:"ROQUEFORT con CEBOLLA", rubro:1, descripcion:"pizza: Rodajas de cebolla, muzzarella y queso azul." },
    "148": { codigo:"148", nombre:"ROQUEFORT", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella y queso azul." },
    "149": { codigo:"149", nombre:"RUCULA con JAMON CRUDO", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella, tomates secos, jamón crudo y rúcula fresca." },
    "150": { codigo:"150", nombre:"RUCULA", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella, tomates seco y rúcula fresca." },
    "151": { codigo:"151", nombre:"SICILIANA", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella, ajíes en vinagre y jamón cocido natural." },
    "152": { codigo:"152", nombre:"TRES QUESOS", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella, provolone y queso azul." },
    "153": { codigo:"153", nombre:"VERDURA con SALSA BLANCA", rubro:1, descripcion:"pizza: Espinaca, salsa blanca, muzzarella y provolone." },
    "154": { codigo:"154", nombre:"VERDURA", rubro:1, descripcion:"pizza: Salsa de tomate, muzzarella, espinaca salteada con ajo y provolone y huevo picado." },
    "201": { codigo:"201", nombre:"Agua mineral bon aqua", rubro:2, descripcion:"bebida: " },
    "202": { codigo:"202", nombre:"Agua Saborizada (AQUARIUS)", rubro:2, descripcion:"bebida: " },
    "203": { codigo:"203", nombre:"Gaseosas de 1.5 litros (COCA-COLA)", rubro:2, descripcion:"bebida: " },
    "204": { codigo:"204", nombre:"Gaseosas de 330 ml. (COCA-COLA)", rubro:2, descripcion:"bebida: " },
    "205": { codigo:"205", nombre:"Jugo de Naranja Natural", rubro:2, descripcion:"bebida: " },
    "206": { codigo:"206", nombre:"Licuado con Agua", rubro:2, descripcion:"bebida: " },
    "207": { codigo:"207", nombre:"Licuado con Jugo o Leche", rubro:2, descripcion:"bebida: " },
    "208": { codigo:"208", nombre:"Limonada", rubro:2, descripcion:"bebida: " },
    "209": { codigo:"209", nombre:"Soda (Sifón 500 ml.)", rubro:2, descripcion:"bebida: " },
    "301": { codigo:"301", nombre:"Almendrado", rubro:3, descripcion:"postre: " },
    "302": { codigo:"302", nombre:"Banana con Dulce de Leche y/o Crema", rubro:3, descripcion:"postre: " },
    "303": { codigo:"303", nombre:"Banana Split", rubro:3, descripcion:"postre: 3 Bochas de Helado a elección, Banana, Chocolate Caliente, Dulce de Leche y Crema Chantilly" },
    "304": { codigo:"304", nombre:"Bombón Escocés", rubro:3, descripcion:"postre: " },
    "305": { codigo:"305", nombre:"Casata", rubro:3, descripcion:"postre: " },
    "306": { codigo:"306", nombre:"Charlotte", rubro:3, descripcion:"postre: " },
    "307": { codigo:"307", nombre:"Chocotorta", rubro:3, descripcion:"postre: " },
    "308": { codigo:"308", nombre:"Chulito", rubro:3, descripcion:"postre: Helado de Crema sobre Merengue y dulce de Leche, cubierto con Almendras Caramelizadas y Chocolate caliente" },
    "309": { codigo:"309", nombre:"Don Pedro", rubro:3, descripcion:"postre: Helado almendrado, crema Chantilly y Whisky" },
    "300": { codigo:"300", nombre:"Duraznos en Almíbar", rubro:3, descripcion:"postre: " },
    "311": { codigo:"311", nombre:"Ensalada de Frutas con Helado", rubro:3, descripcion:"postre: " },
    "312": { codigo:"312", nombre:"Ensalada de Frutas", rubro:3, descripcion:"postre: " },
    "313": { codigo:"313", nombre:"Flan Casero", rubro:3, descripcion:"postre: " },
    "314": { codigo:"314", nombre:"Flan Mixto", rubro:3, descripcion:"postre: " },
    "315": { codigo:"315", nombre:"Frutillas con Crema o Jugo de Naranja", rubro:3, descripcion:"postre: " },
    "316": { codigo:"316", nombre:"Helados El Fundador", rubro:3, descripcion:"postre: 1, 2 o 3 Bochas. &nbsp; Dulce de Leche, Crema Americana, Chocolate, Frutilla, Vainilla y Limón" },
    "317": { codigo:"317", nombre:"La Guitarrita", rubro:3, descripcion:"postre: Helado Casata, Crema Chantilly, Duraznos en Almibar, Obleas y Chocolate Caliente." },
    "318": { codigo:"318", nombre:"Marcianito", rubro:3, descripcion:"postre: Helado Casata, Crema Chantilly, Dulce de Leche, Obleas y Chocolate Caliente" },
    "319": { codigo:"319", nombre:"Merengue", rubro:3, descripcion:"postre: Mixto: Crema y Duraznos/Crema y Frutillas" },
    "320": { codigo:"320", nombre:"Mousse de Chocolate", rubro:3, descripcion:"postre: " },
    "321": { codigo:"321", nombre:"Panqueque con Dulce de Leche", rubro:3, descripcion:"postre: " },
    "322": { codigo:"322", nombre:"Panqueque con Dulce de Leche y Helado", rubro:3, descripcion:"postre: " },
    "323": { codigo:"323", nombre:"Queso y Dulce (membrillo o batata)", rubro:3, descripcion:"postre: " },
    "324": { codigo:"324", nombre:"Tarantella", rubro:3, descripcion:"postre: " },
    "325": { codigo:"325", nombre:"Tiramisú", rubro:3, descripcion:"postre: " }
  };

  // ---------- menuItem --------------------------------------------------
  // menuItem: uno de los items del menú
  class menuItem {

    constructor(codigo){
      this.codigo = codigo;
      this.nombre = '';
      this.descripcion = '';
      this.rubro = '';
      if(codigo){
        var elItem = MW.menuInput[ codigo ];
        if( elItem ){
          this.nombre = elItem.nombre;
          this.descripcion = elItem.descripcion;
          this.rubro = elItem.rubro;
        }
      }
    };

  };

  // ---------- pedidoItem ------------------------------------------------
  // pedidoItem: un ítem del pedido, un ítem elegido del menú con cantidad, importe y opciones
  class pedidoItem {

    constructor( menuItem, cantidad, opciones ){ // opciones, no definido, es un string JSON
      this.menuItem = menuItem;
      this.cantidad = cantidad;
      this.optiones = opciones;
    };

    agregarAlPedido( pedido ){
      console.log( 'agregar al pedido' );
    };

    agregarAlPedido( pedido ){
      console.log( 'render' );
      /*
        <tr class="pedItem">
          <td class="pedCodigo">123</td>
          <td class="pedDescripcion">Pizza Napolitana<br>&nbsp;&nbsp;sin ajo<br>&nbsp;&nbsp;con aceitunas</td>
          <td class="pedPrecio">290</td>
          <td class="pedCantidad">1</td>
          <td class="pedImporte">290</td>
        </tr>
      */
      txtRender( menuitem ) = 
        '<tr class="pedItem">' +
          '<td class="pedCodigo">' + this.codigo + '</td>' +
          '<td class="pedDescripcion">' + this.descripcion + '</td>' + // <br>&nbsp;&nbsp;sin ajo<br>&nbsp;&nbsp;con aceitunas
          '<td class="pedPrecio">' + menuitem.precio( this.codigo ) + '</td>' +
          '<td class="pedCantidad">' + this.cantidad + 'td>' +
          '<td class="pedImporte">' + cantidad * menuitem.precio( this.codigo ) + '</td>';
        '</tr>';
    };

  };

  // ----------------------------------------------------------------------
  // el pedido que se está cargando           HACER UNA CLASS CON array de pedidoItem's y datos del cliente
  MW.elPedido = {
    items: []
  };

  // ---------- funciones de interacción ----------------------------------
  MW.selectMenuItem = function( $this ){
    $( 'li.menuItem.selected' ).removeClass( 'selected' );
    $this.addClass( 'selected' );
  };

  MW.agregarItemAlPedido = function( $this ){
    var nuevoItem = $( '<tr>' + $this.text() + '</tr>' );
    $( 'li.menuItem.selected' ).removeClass( 'selected' );
  };


  // ----------------------------------------------------------------------
  $(document).ready(function () {

    // delete this event handler
    $( '#select-rubro li' ).on(
      'click',
      function( event ){
        var $this = $( event.target );
        var numRubro = $this.text().split( ' ' )[0]; // pick "1" from "1 bebidas"
        $( '.rubro' ).css( 'display', 'none' );
        $( '#rubro-' + numRubro ).css( 'display', 'block' );
        $( '#select-rubro li' ).removeClass( 'rubroSelected' );
        $this.addClass( 'rubroSelected' );
      }
    );

    // select menu item on click
    $( '.menuItem' ).on(
      'click',
      function( event ){
        var $this = $( event.target );
        if( $this.hasClass( 'selected' ) ){
          MW.agregarItemAlPedido( $this );
        } else {
          MW.selectMenuItem( $this );
        }
      }
    );

    // enable quicksearch
    var qs = $( '#buscaMenu' ).quicksearch(
      '#rubrosTodos li',
      {
        removeDiacritics: true,
        show: function () {
          $(this).removeClass( 'hiddenByQS' );
        },
        hide: function () {
          MW.ocultarMenuItem( $(this));
        },
      }
    );

    MW.ocultarMenuItem = function( $elItem ){
      $elItem.addClass( 'hiddenByQS' ); // hidden by QuickSearch
      $elItem.removeClass( 'selected' ); // remove selection is any
    };

    // ope está usando las flechas del teclado para mover arriba o abajo
    // el ítem seleccionado de la lista del menú acortado
    MW.moverSeleccion = function( delta ){ // delta es +1 o -1
      var $visibleItems = $( '.menuItem' ).not( '.hiddenByQS' );
      if( ! $visibleItems.length ){ // no visible items
        return;
      } else {
        if( $visibleItems.length === 1 ){ // one visible item
          $visibleItems.addClass( 'selected' );
        } else { // 2+ visible items
          // get index of selected item
          var i = $visibleItems.index( $( '.menuItem.selected' ));
          // got the collection and the index of the selected single item
          // de-select the selected
          $( '.menuItem.selected' ).removeClass( 'selected' );
          // add delta (+1 or -1) to the index
          i = i + delta;
          // check bounds
          if( i < 0 ){ // up from first: select last
            i = $visibleItems.length - 1;
          } else {
            if( i > ( $visibleItems.length - 1 )){ // down from last: select first
              i = 0;
            };
          };
          // finally select the item
          $( $visibleItems[ i ]).addClass( 'selected' );
        };
      };
    };

    // filter up/down arrows and enter keys from search box
    $( '#buscaMenu' ).on(
      'keydown',
      function( event ){
        console.log( 'key pressed ' + event.which );
        var $elMenuItemSeleccionado = $( '.menuItem.selected' );

        switch(event.which) {
          case 38: // up: if no menu item selected then select first, else previous
            if( $elMenuItemSeleccionado.length === 0 ){
              MW.selectMenuItem( $( '.menuItem' ).not( '.hiddenByQS' ).filter( ':last' )); // select first visible
            } else { // select prev if any
              MW.moverSeleccion( -1 );
            };
            break;

          case 40: // down: if no menu item selected then select first, else next
            if( $elMenuItemSeleccionado.length === 0 ){
              MW.selectMenuItem( $( '.menuItem' ).not( '.hiddenByQS' ).filter( ':first' )); // select first visible
            } else { // select next if any
              MW.moverSeleccion( +1 );
            };
            break;

          case 13: // enter add item to pedido
            break;

          default: return; // exit this handler for other keys
        }

        // if which = enter and there is only one search result or a selected item
      }
    );

    $( '#buscaMenu' ).focus();

    var zzz = new menuItem( '323' );

  });
