/**
 * Dados de contato oficiais. Edite aqui para atualizar toda a página.
 * Deixe como `null` o que ainda não estiver confirmado — o item não será exibido.
 */
export const WHATSAPP_NUMBER = "553488990072";
export const WHATSAPP_DISPLAY = "(34) 8899-0072";

/** Monta um link wa.me com a mensagem devidamente codificada. */
export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  agendar:
    "Olá, Dalila! Conheci seu trabalho pelo site e gostaria de verificar a disponibilidade para agendar uma sessão.",
  duvidas:
    "Olá, Dalila! Conheci seu trabalho pelo site e gostaria de tirar algumas dúvidas sobre a psicoterapia e os atendimentos.",
  primeiroAtendimento:
    "Olá, Dalila! Gostaria de verificar a disponibilidade para realizar meu primeiro atendimento.",
  individual:
    "Olá, Dalila! Conheci seu trabalho pelo site e gostaria de saber mais sobre o atendimento individual e verificar a disponibilidade de horários.",
  casal:
    "Olá, Dalila! Conheci seu trabalho pelo site e gostaria de saber mais sobre a terapia de casal e verificar a disponibilidade de horários.",
  familiar:
    "Olá, Dalila! Conheci seu trabalho pelo site e gostaria de saber mais sobre a terapia familiar e verificar a disponibilidade de horários.",
  processo:
    "Olá, Dalila! Conheci seu trabalho pelo site e gostaria de conversar sobre o processo de psicoterapia e os atendimentos.",
  footer:
    "Olá, Dalila! Conheci seu trabalho pelo site e gostaria de conversar sobre os atendimentos.",
} as const;

/** Link padrão de agendamento. */
export const WHATSAPP_URL = whatsappLink(WA_MESSAGES.agendar);

export const INSTAGRAM_URL: string | null = "https://www.instagram.com/dalilaamerico.psi/";
export const INSTAGRAM_HANDLE: string | null = null; // ex.: "@dalilaamerico"
export const EMAIL: string | null = null; // ex.: "contato@dalilaamerico.com.br"
export const LOCATION: string | null = null; // ex.: "Belo Horizonte • MG"
