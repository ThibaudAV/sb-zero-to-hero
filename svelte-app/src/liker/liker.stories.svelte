<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Liker from "./liker.svelte";
  import BorderDecorator from "./BorderDecorator.svelte";
</script>

<Meta title="Liker" component={Liker} />

<Template let:args>
  <BorderDecorator>
    <Liker />
  </BorderDecorator>
</Template>

<Story
  name="Default"
  args={{
    primary: true,
    label: "Button",
  }}
/>
