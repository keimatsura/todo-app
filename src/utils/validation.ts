interface Info {
  mailAddress: string;
  password: string;
}

export const validate = (values: Info) => {
  const errors: Partial<Info> = {};
  if (!values.mailAddress) {
    errors.mailAddress = "メールアドレスを入力してください";
  } else if (
    !/^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/.test(
      values.mailAddress
    )
  ) {
    errors.mailAddress = "メールアドレスを正しく入力してください";
  }

  if (!values.password) {
    errors.password = "パスワードを入力してください";
  } else if (values.password.length < 4) {
    errors.password = "4文字以上15文字以下で入力してください";
  } else if (values.password.length > 15) {
    errors.password = "4文字以上15文字以下で入力してください";
  }
  return errors;
};

export default validate;
