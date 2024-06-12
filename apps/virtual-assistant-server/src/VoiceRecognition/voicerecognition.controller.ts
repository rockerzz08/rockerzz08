import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { VoiceRecognitionService } from "./voicerecognition.service";
import { ProcessedCommandOutput } from "../voiceRecognition/ProcessedCommandOutput";

@swagger.ApiTags("voiceRecognitions")
@common.Controller("voiceRecognitions")
export class VoiceRecognitionController {
  constructor(protected readonly service: VoiceRecognitionService) {}

  @common.Post("/convert-voice")
  @swagger.ApiOkResponse({
    type: ProcessedCommandOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ConvertVoiceToCommand(
    @common.Body()
    body: string
  ): Promise<ProcessedCommandOutput> {
        return this.service.ConvertVoiceToCommand(body);
      }

  @common.Get("/:id/process-voice-command")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ProcessVoiceCommand(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ProcessVoiceCommand(body);
      }
}
