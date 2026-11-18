// client/src/components/ui/AiImageCaption.tsx

import { useLanguage } from '../../contexts/LanguageContext';

/**
 * Legenda obrigatória sobre imagens geradas com IA
 * (transparência na publicidade em saúde — ERS).
 *
 * Posicionada no canto inferior esquerdo da imagem: o contentor
 * pai tem de ter `position: relative`.
 */
export default function AiImageCaption({
  className = '',
}: {
  className?: string;
}) {
  const { t } = useLanguage();

  return (
    <span
      className={`absolute bottom-2 left-2 z-10 pointer-events-none select-none rounded bg-black/55 px-2 py-0.5 text-[10px] sm:text-[11px] font-medium leading-tight text-white/90 backdrop-blur-sm ${className}`}
    >
      {t('treatments.aiImageCaption')}
    </span>
  );
}
