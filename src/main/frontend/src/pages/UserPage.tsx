import FormFiled from "@/components/common/FormField";

const UserPage = () => {
  return (
    <div>
      <FormFiled
        label="닉네임"
        name="nickname"
        type="text"
        placeholder="2글자 이상"
      />
    </div>
  );
};

export default UserPage;
