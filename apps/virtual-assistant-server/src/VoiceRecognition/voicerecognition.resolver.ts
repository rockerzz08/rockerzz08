import * as graphql from "@nestjs/graphql";
import { VoiceCommandInput } from "../voiceRecognition/VoiceCommandInput";
import { ProcessedCommandOutput } from "../voiceRecognition/ProcessedCommandOutput";
import { VoiceRecognitionService } from "./voicerecognition.service";

export class VoiceRecognitionResolver {
  constructor(protected readonly service: VoiceRecognitionService) {}

  @graphql.Mutation(() => ProcessedCommandOutput)
  async ConvertVoiceToCommand(
    @graphql.Args()
    args: VoiceCommandInput
  ): Promise<ProcessedCommandOutput> {
    return this.service.ConvertVoiceToCommand(args);
  }

  @graphql.Query(() => String)
  async ProcessVoiceCommand(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ProcessVoiceCommand(args);
  }
}
