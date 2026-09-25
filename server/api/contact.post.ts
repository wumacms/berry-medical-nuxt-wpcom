export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.name || !body.name.trim()) {
    throw createError({
      statusCode: 400,
      statusMessage: "请输入您的姓名",
    });
  }

  if (!body.phone || !body.phone.trim()) {
    throw createError({
      statusCode: 400,
      statusMessage: "请输入您的联系电话",
    });
  }

  // 模拟记录或者通知逻辑
  console.log("[Contact Submission Received]:", body);

  return {
    success: true,
    message: "您的咨询需求已成功提交！专业顾问将在 24 小时内与您联系。",
    timestamp: new Date().toISOString(),
  };
});
