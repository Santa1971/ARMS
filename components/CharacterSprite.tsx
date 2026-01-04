import React, { useEffect, useState } from 'react';
import { GoogleGenAI } from "@google/genai";

// 기본 이미지 (API 키가 없거나 로딩 전 표시)
const defaultImg = '/unnamed (1).jpg';

type Emotion = 'guide' | 'success' | 'work' | 'insight';

interface CharacterSpriteProps {
  emotion: Emotion;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const CharacterSprite: React.FC<CharacterSpriteProps> = ({ emotion, size = 'md', className = '' }) => {
  const [imageSrc, setImageSrc] = useState<string>(defaultImg);
  const [loading, setLoading] = useState<boolean>(false);

  // 감정별 프롬프트 설정 (첨부된 캐릭터 이미지의 특징을 반영)
  const getPrompt = (emo: Emotion) => {
    // 캐릭터의 고유 특징 정의 (일관성 유지 핵심)
    const characterDescription = "A cute 3D mascot character with a dark teal-green body. It wears a distinctive pointed teal helmet shaped like a water droplet with a vertical ridge. It has a pale cream-colored round face with a friendly smile. It wears a large black high-tech headset with glowing cyan LED rings on the earcups. On its chest, there is a shield-shaped emblem outlined in beige-gold with a simple cloud icon inside. The character has round teal hands.";
    const styleDescription = "High-quality 3D render, Pixar style, glossy plastic texture, clean studio lighting, 4k resolution.";
    
    switch (emo) {
      case 'guide':
        return `${characterDescription} The character is looking at the camera and waving one hand in a friendly greeting. Soft blue ambient lighting. ${styleDescription}`;
      case 'success':
        return `${characterDescription} The character is celebrating with arms raised high, looking very happy and triumphant. Bright emerald green lighting effects. ${styleDescription}`;
      case 'work':
        return `${characterDescription} The character is holding a paper document in one hand. Holographic blue binary code and digital data streams are floating in the air in front of its face as if it is scanning the document. Focused expression. Indigo lighting. ${styleDescription}`;
      case 'insight':
        return `${characterDescription} The character is pointing a finger upwards with a bright glowing lightbulb appearing directly above its head, symbolizing a great idea. Purple and yellow creative lighting. ${styleDescription}`;
      default:
        return `${characterDescription} Standing in a neutral friendly pose. ${styleDescription}`;
    }
  };

  useEffect(() => {
    let isMounted = true;

    const generateCharacter = async () => {
      // API 키가 없으면 기본 이미지 유지
      if (!process.env.API_KEY) return;

      setLoading(true);
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        // Nano Banana (Gemini 2.5 Flash Image) 모델 사용
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: getPrompt(emotion) }]
          },
          config: {
             // 이미지 생성을 위한 설정
          }
        });

        if (!isMounted) return;

        // 응답에서 이미지 추출
        if (response.candidates?.[0]?.content?.parts) {
          for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
              const base64String = part.inlineData.data;
              setImageSrc(`data:image/png;base64,${base64String}`);
              break;
            }
          }
        }
      } catch (error) {
        console.error("Character generation failed:", error);
        // 에러 발생 시 기본 이미지 유지
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    generateCharacter();

    return () => {
      isMounted = false;
    };
  }, [emotion]);

  const emotionConfig: Record<Emotion, { border: string, shadow: string, overlay: string }> = {
    guide: { 
        border: 'border-blue-500', 
        shadow: 'shadow-blue-500/50',
        overlay: 'bg-blue-500/10'
    },
    success: { 
        border: 'border-emerald-500', 
        shadow: 'shadow-emerald-500/50',
        overlay: 'bg-emerald-500/10'
    },
    work: { 
        border: 'border-indigo-500', 
        shadow: 'shadow-indigo-500/50',
        overlay: 'bg-indigo-500/10' 
    },
    insight: { 
        border: 'border-purple-500', 
        shadow: 'shadow-purple-500/50',
        overlay: 'bg-purple-500/10'
    },
  };

  const sizeClasses = {
    sm: 'w-12 h-12 rounded-xl border-2',
    md: 'w-24 h-24 rounded-2xl border-4',
    lg: 'w-36 h-36 rounded-3xl border-4',
  };

  const config = emotionConfig[emotion];

  return (
    <div 
      className={`relative overflow-hidden bg-slate-800 ${config.shadow} ${sizeClasses[size]} ${config.border} ${className} transition-all duration-300`}
      role="img"
      aria-label={`Character showing ${emotion} emotion`}
    >
        {/* 생성된 이미지 또는 기본 이미지 */}
        <img 
            src={imageSrc} 
            alt="ARMS Character" 
            className={`w-full h-full object-cover transform transition-transform duration-500 hover:scale-110 ${loading ? 'opacity-50 blur-sm' : 'opacity-100 blur-0'}`}
        />
        
        {/* 로딩 인디케이터 */}
        {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
        )}
        
        {/* 감정에 따른 미세한 틴트 오버레이 */}
        <div className={`absolute inset-0 ${config.overlay} mix-blend-overlay pointer-events-none`} />
        
        {/* 조명 효과 */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50 pointer-events-none" />
    </div>
  );
};