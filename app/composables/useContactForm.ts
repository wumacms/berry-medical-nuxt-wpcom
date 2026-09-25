import type { ContactFormData } from "~/types";

/**
 * 联系表单统一逻辑 composable
 * 复用于首页内联表单、联系页表单，消除重复代码
 */
export const useContactForm = () => {
  const form = reactive<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    type: "",
    message: "",
  });

  const isSubmitting = ref(false);
  const submitSuccess = ref(false);
  const errorMessage = ref("");

  const resetForm = () => {
    form.name = "";
    form.phone = "";
    form.email = "";
    form.type = "";
    form.message = "";
  };

  const submitForm = async () => {
    errorMessage.value = "";

    if (!form.name.trim()) {
      errorMessage.value = "请填写您的姓名";
      return;
    }
    if (!form.phone.trim()) {
      errorMessage.value = "请填写联系电话";
      return;
    }

    isSubmitting.value = true;
    try {
      await $fetch("/api/contact", {
        method: "POST",
        body: { ...form },
      });
      submitSuccess.value = true;
      resetForm();
      setTimeout(() => {
        submitSuccess.value = false;
      }, 4500);
    } catch (err: any) {
      errorMessage.value =
        err?.data?.statusMessage || "提交失败，请稍后重试";
    } finally {
      isSubmitting.value = false;
    }
  };

  return {
    form,
    isSubmitting,
    submitSuccess,
    errorMessage,
    submitForm,
    resetForm,
  };
};
