import { Module } from "@nestjs/common";
import { VoiceRecognitionService } from "./voicerecognition.service";
import { VoiceRecognitionController } from "./voicerecognition.controller";
import { VoiceRecognitionResolver } from "./voicerecognition.resolver";

@Module({
  controllers: [VoiceRecognitionController],
  providers: [VoiceRecognitionService, VoiceRecognitionResolver],
  exports: [VoiceRecognitionService],
})
export class VoiceRecognitionModule {}
