import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { CommandTitle } from "../command/CommandTitle";

export const ResponseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="command.id" reference="Command" label="command">
          <SelectInput optionText={CommandTitle} />
        </ReferenceInput>
        <TextInput label="responseText" multiline source="responseText" />
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Create>
  );
};
