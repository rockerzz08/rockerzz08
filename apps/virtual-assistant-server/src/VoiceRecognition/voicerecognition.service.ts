import { Injectable } from "@nestjs/common";
import { VoiceCommandInput } from "../voiceRecognition/VoiceCommandInput";
import { ProcessedCommandOutput } from "../voiceRecognition/ProcessedCommandOutput";

@Injectable()
export class VoiceRecognitionService {
  constructor() {}
  async ConvertVoiceToCommand(args: VoiceCommandInput): Promise<ProcessedCommandOutput> {
    throw new Error("Not implemented");
  }
  async ProcessVoiceCommand(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
