/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */

 /**
  * Track the trade of a commodity from one trader to another
  * @param {org.usac.tienda.Recargar} recargar - the trade to be processed
  * @transaction
  */
 async function Recargar(recargar) {
     var factory = getFactory();
     var NS = 'org.usac.tienda';
     recargar.usuario.saldo += recargar.dinero*2;
     return getParticipantRegistry(NS + '.Usuario')
   		.then(function(updateUsuario){
   			return updateUsuario.update(recargar.usuario);
   		})
 }


 /**
  * Track the trade of a commodity from one trader to another
  * @param {org.usac.tienda.Reabastecer} reabastecer - the trade to be processed
  * @transaction
  */
 async function Reabastecer(reabastecer) {
   var factory = getFactory();
   var NS = 'org.usac.tienda';
   reabastecer.producto.cantidad += reabastecer.cantidad;
   return getAssetRegistry(NS + '.Producto')
    .then(function(updateProducto){
      return updateProducto.update(reabastecer.producto);
    })
 }

 /**
  * Track the trade of a commodity from one trader to another
  * @param {org.usac.tienda.Pago} pago - the trade to be processed
  * @transaction
  */
 async function pago(pago) {
   var factory = getFactory();
   var NS = 'org.usac.tienda';

 }
