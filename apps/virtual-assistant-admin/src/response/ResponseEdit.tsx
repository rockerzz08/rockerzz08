import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { CommandTitle } from "../command/CommandTitle";

export const ResponseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="command.id" reference="Command" label="command">
          <SelectInput optionText={CommandTitle} />
        </ReferenceInput>
        <TextInput label="responseText" multiline source="responseText" />
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Edit>
  );
};
