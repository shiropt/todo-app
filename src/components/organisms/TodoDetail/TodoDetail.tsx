import { StatusBadge } from "@/components/molecules/StatusBadge";
import { STATUS, Todo } from "@/modules/todo/type";
import { DateInput, DatesProvider } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { FC, useEffect } from "react";

import { ActionIcon } from "@/components/atoms/ActionIcon";
import { formatDateToYMD } from "@/utils/date";
import {
  Button,
  Container,
  Flex,
  Group,
  Menu,
  Radio,
  Table,
  TextInput,
  Textarea,
} from "@mantine/core";
import dayjs from "dayjs";
import { useDispatch } from "@/libs/redux";
import { postTodo, updateTodo } from "@/libs/supabase/actions";
import "./todo-detail.css";

type Props = {
  className?: string;
  todo: Todo;
  onClose: () => void;
};

export const TodoDetail: FC<Props> = ({
  className = "todo-detail",
  todo,
  onClose,
}) => {
  const { id, title, status, created_at, updated_at, deadline, description } =
    todo;
  const {
    values,
    onSubmit,
    setFieldValue,
    setValues,
    getInputProps,
    isDirty,
    setInitialValues,
    reset,
  } = useForm<Todo>({
    initialValues: {
      id,
      title,
      status,
      created_at,
      updated_at,
      deadline,
      description,
    },
  });

  const dispatch = useDispatch();

  useEffect(() => {
    setValues(todo);
    setInitialValues(todo);
  }, [todo, setValues, setInitialValues]);

  const handleSubmit = async (values: Todo) => {
    if (values.id) {
      await updateTodo(values, dispatch);
      setInitialValues(values);
    } else {
      await postTodo(values, dispatch);
      reset();
    }
  };

  return (
    <Container miw="400px" p="8" className={className}>
      <ActionIcon
        onClick={onClose}
        icon="mdiChevronDoubleRight"
        variant="white"
      />
      <form onSubmit={onSubmit(handleSubmit)}>
        <TextInput
          {...getInputProps("title")}
          py="md"
          required
          bd={0}
          name="title"
          value={values.title}
          placeholder="No Title"
        ></TextInput>
        <Table verticalSpacing="sm">
          <Table.Tbody>
            <Table.Tr>
              <Table.Td>Created Date</Table.Td>
              <Table.Td>{formatDateToYMD(values.created_at)}</Table.Td>
            </Table.Tr>
            {updated_at && (
              <Table.Tr>
                <Table.Td>Updated Date</Table.Td>
                <Table.Td>{formatDateToYMD(values.updated_at)}</Table.Td>
              </Table.Tr>
            )}
            <Table.Tr>
              <Table.Td>Due Date</Table.Td>
              <Table.Td>
                <DatesProvider settings={{ firstDayOfWeek: 0, locale: "ja" }}>
                  <DateInput
                    classNames={{
                      root: "max-w-[294px] bg-white rounded min-w-[120px]",
                    }}
                    valueFormat="YYYY/MM/DD"
                    value={
                      values.deadline ? new Date(values.deadline) : undefined
                    }
                    onChange={(date) => {
                      setFieldValue(
                        "deadline",
                        date ? dayjs(date).toISOString() : ""
                      );
                    }}
                    placeholder="Due Date"
                  />
                </DatesProvider>
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>Status</Table.Td>
              <Table.Td>
                <Menu trigger="hover">
                  <Menu.Target>
                    <Button variant="transparent">
                      <StatusBadge status={values.status} />
                    </Button>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Radio.Group
                      onChange={(value) => {
                        setFieldValue(
                          "status",
                          Number(value) as Todo["status"]
                        );
                      }}
                      value={values.status.toString()}
                    >
                      <Radio.Card value={STATUS.IN_PROGRESS.toString()} bd={0}>
                        <Group p="xs">
                          <Radio.Indicator />
                          <StatusBadge status={STATUS.IN_PROGRESS} />
                        </Group>
                      </Radio.Card>
                      <Radio.Card value={STATUS.COMPLETE.toString()} bd={0}>
                        <Group p="xs">
                          <Radio.Indicator />
                          <StatusBadge status={STATUS.COMPLETE} />
                        </Group>
                      </Radio.Card>
                      <Radio.Card value={STATUS.STAY.toString()} bd={0}>
                        <Group p="xs">
                          <Radio.Indicator />
                          <StatusBadge status={STATUS.STAY} />
                        </Group>
                      </Radio.Card>
                    </Radio.Group>
                  </Menu.Dropdown>
                </Menu>
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>Description</Table.Td>
              <Table.Td>
                <Textarea
                  name="description"
                  placeholder="description"
                  value={values.description}
                  {...getInputProps("description")}
                />
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
        <Flex justify="end" p="8">
          <Button disabled={!isDirty()} type="submit" color="black">
            Save
          </Button>
        </Flex>
      </form>
    </Container>
  );
};
