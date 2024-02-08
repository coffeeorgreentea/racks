// @ts-ignore
import { createOpenAILanguageModel, createJsonTranslator } from 'typechat';
// @ts-ignore
import { createZodJsonValidator } from 'typechat/zod';
import { CallOptionsType, ResponseSchema } from './schemas';

const OPENAI_API_KEY = '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';
const MODEL_NAME = 'gpt-4-0125-preview';

// Simplify by combining steps into a single SDK creation process
export const typeChatSDK = (() => {
  const model = createOpenAILanguageModel(OPENAI_API_KEY, MODEL_NAME);
  const validator = createZodJsonValidator(ResponseSchema, 'Response');
  const translator = createJsonTranslator(model, validator);

  return {
    async call(options: CallOptionsType, prompt?: string): Promise<any> {
      const response = await translator.translate(
        'Create an response for the given api requet data: ' +
          JSON.stringify(options),
        prompt
      );
      if (!response.success) {
        throw new Error(response.message);
      }
      return response.data;
    },
  };
})();

export type TypeChatSDK = typeof typeChatSDK;
