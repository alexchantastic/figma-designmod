figma.showUI(__html__, {
  width: 500,
  height: 500,
});

figma.ui.onmessage = (msg: { type: string; code: string }) => {
  if (msg.type == "run") {
    eval(msg.code);
  }

  if (msg.type == "cancel") {
    figma.closePlugin();
  }
};
