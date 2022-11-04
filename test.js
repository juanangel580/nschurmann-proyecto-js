{
    "params":{
       "rut":"(rut socio o cliente que realiza la acción sin guión ni dígito verificador)",
       "digito_verificador":"(digito verificador rut socio o cliente)",
       "accion":"(nombreMicroservicio / endpointPath)",
       "sistema_operativo":"(dejar en blanco desde el backend)",
       "version_so":"(dejar en blanco desde el backend)",
       "canal":"(extraer canal desde token JWT)",
       "estado":"(OK o ERROR segun resultado ejecución)",
       "codigo_respuesta":"(umerico codigo respuesta HTTTP)",
       "detalle_error":"(llenar con string con la descripción, solo en caso de error)",
       "navegador":"(dejar en blanco desde el backend)",
       "ip":"texto en el formato 0.0.0.0",
       "informacion_adicional":{
          "id_sesion_perfilador":"(UUID de visita generado por el perfilador)",
          "id_sesion_google_analytics":"(ID que se obtiene desde Datalayer y se envía a MsPerfilComercial al Perfila - Login)",
          "id_usuario_datalayer":"(Se obtiene enchriptando el rut del cliene en SHA256)",
          "ingreso_via_campanya":"(booleano, se marca true cuando el simulador unificado recibre la variable codigo de campaña)",
          "aprueba_perfil_comercial_credito_consumo":"booleano que indica si cuenta o no con un perfil comercial apto para la contratación de un crédito de consumo",
          "motivo_rechazo_perfil_comercial_credito_consumo":"string que describe el motivo por el cual no cumple con un perfil de crédito de consumo",
          "aprueba_filtros_comerciales":"booleano que indica si aprueba o no los filtros comerciales",
          "motivo_rechazo_filtros_comerciales":"string que indica por qué no cumple con los filtros comerciales",
          "id_simulacion":"(es un númerico que se genera desde smulador unificado y que representa la simulación en el core IBS, marcar siempre que esté disponible)",
          "muestra_modal":"(este es un booleano que se llena solamente desde frontend)",
          "muestra_barra_ecommerce":"(este es un booleano que se llena solamente desde frontend)",
          "click_modal":"(este es un booleano que se llena solamente desde frontend)",
          "click_barra_ecommerce":"(este es un booleano que se llena solamente desde frontend)",
          "campanya_codigo":"(llenar del DTO->out->CampanaDetalleResponse->codigoCampana)",
          "campanya_numero_cliente":"(llenar del DTO->out->CampanaDetalleResponse->numeroCliente)",
          "campanya_numero_solicitud":"(llenar del DTO->out->CampanaDetalleResponse->numeroSolicitud)",
          "campanya_renta_base":"(llenar del DTO->out->CampanaDetalleResponse->rentaBase)",
          "campanya_renta_liquida":"(llenar del DTO->out->CampanaDetalleResponse->rentaLiquida)",
          "campanya_renta_depurada":"(llenar del DTO->out->CampanaDetalleResponse->rentaDepurada)",
          "campanya_valor_presente_pv_max":"(llenar del DTO->out->CampanaDetalleResponse->pvMaximo)",
          "campanya_pagos_por_periodo_pmt_max":"(llenar del DTO->out->CampanaDetalleResponse->pmtmax)",
          "campanya_codigo_promocion":"(llenar del DTO->out->CampanaDetalleResponse->codigoPromocion)",
          "campanya_tipo":"(llenar del DTO->out->CampanaDetalleResponse->tipoCampana)",
          "campanya_tipo_evaluacion":"(llenar del DTO->out->CampanaDetalleResponse->tipoEvaluacion)",
          "campanya_descuento_tasa":"(llenar del DTO->out->CampanaDetalleResponse->descuentoTasa)",
          "campanya_vigencia_desde":"(llenar del DTO->out->CampanaDetalleResponse->vigenciaDesde)",
          "campanya_vigencia_hasta":"(llenar del DTO->out->CampanaDetalleResponse->vigenciaHasta)",
          "campanya_total_creditos_vigentes":"(llenar del DTO->out->CampanaDetalleResponse->totalCreditosVigentes)",
          "campanya_es_reliquidacion":"(llenar del DTO->out->CampanaDetalleResponse->esReliquidacion)",
          "simulador_modifica_condiciones_campanya":"(este es un dato booleano que se debe registrar en el Simulador Unificado solo en caso de que se cuente con un código de campaña y se esté solicitando modificar una variable de la simulación desde la interfaz de usuario)",
          "simulador_monto":"(el monto del crédito simulado)",
          "simulador_plazo_credito":"(el plazo del crédito simulado)",
          "simulador_numero_cuotas":"(el número de cuotas del crédito simulado)",
          "simulador_valor_cuota":"(el valor de cada cuota del crédito simulado)",
          "simulador_tasa":"(la tasa de interés del crédito simulado)",
          "simulador_cae":"(el porcentaje que representa el costo anual equivalemnte del crédito simulado)",
          "simulador_fecha_primer_vencimiento":"(la fecha comprometida para realizar el pago de la primera cuota del crédito simulado)",
          "simulador_costo_total_credito":"(el costo total del crédito simulado)",
          "simulador_declara_enfermedad_preexistente":"(nombre de la enfermedad preexistente declarada, en caso de que declare alguna)",
          "simulador_telefono_contacto":"(el teléfono registrado para contacto a través del simulador unificado)",
          "simulador_mail_contacto":"(el mail registrado para contacto a través del simulador unificado)",
          "simulador_monto_seguro_desgravamen":"(el monto del seguro de desgravamen para el credito simulado, en caso de que este cuente con uno, si no cuenta con este seguro el campo debe quedar nulo)",
          "simulador_monto_seguro_cesantia":"(el monto del seguro de cesantia para el credito simulado, en caso de que este cuente con uno, si no cuenta con este seguro el campo debe quedar nulo)",
          "simulador_monto_seguro_enfermedades_graves":"(el monto del seguro de enfermedades graves para el credito simulado, en caso de que este cuente con uno, si no cuenta con este seguro el campo debe quedar nulo)",
          "simulador_monto_seguro_hospitalizacion":"(el monto del seguro de hospitalización para el credito simulado, en caso de que este cuente con uno, si no cuenta con este seguro el campo debe quedar nulo)",
          "simulador_monto_seguro_invalidez_total":"(el monto del seguro de invalidez total para el credito simulado, en caso de que este cuente con uno, si no cuenta con este seguro el campo debe quedar nulo)",
          "simulador_monto_seguro_vida_invalidez":"(el monto del seguro de desgvida e invalidezravamen para el credito simulado, en caso de que este cuente con uno, si no cuenta con este seguro el campo debe quedar nulo)",
          "simulador_genera_documento_cotizacion":"(boleano que se genera al momento de construír el documento PDF de la solicitud de crédito)",
          "simulador_muestra_documento_cotizacion":"(booleano que se llena solamente desde la interfaz de usuario en el momento en que se le muestra el documento PDF al socio)",
          "simulador_ubicacion_documento_cotizacion":"(string con la URL final del documento PDF generado para la cotización del crédito simulado)",
          "simulador_socio_cliente_descarga_documento_cotizacion":"(booleano que se llena solamente desde la interfaz de usuario en el momento en que el socio presiona el botón para descarga el documento PDF)",
          "simulador_envio_simulacion_email":"(booleano que se marca desde el simulador unificado, una vez que la cotización es despachada al sistema de correos transaccionales de Coopeuch)",
          "simulador_curse_credito":"(booleano que se genera desde la interfaz de usuario y el backend, una vez que el cliente realiza la acción final del flujo de simulador, demostrando su intención de compra)",
          "abandono_sesión":"(true si no aprueba los filtros comerciales o el perfil comercial no apto | null si logra listar campañas)"
       }
    }
 }