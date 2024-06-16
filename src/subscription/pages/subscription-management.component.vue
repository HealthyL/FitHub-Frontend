<script>
import { SubscriptionApiService } from "../services/subscription-api.service";
import { SubscriptionEntity } from "../model/subscription.entity";

export default {
  data() {
    return {
      plans: [],
    };
  },
  methods: {
    async loadPlans() {
      const response = await new SubscriptionApiService().getAllPlans();
      this.plans = response.data.map(planData => new SubscriptionEntity(planData.id, planData.name, planData.description, planData.isCurrent));
    },
    startPlan(planId) {
      console.log(`Iniciando plan con id: ${planId}`);
      this.$router.push('/payment-gateway');
    }
  },
  created() {
    this.loadPlans();
  }
}
</script>

<template>
  <h1 class="titulo-settings">
    {{ $t('Plans') }}
    <pv-divider class="divider"></pv-divider>
  </h1>
  <div class="plan-cards">
    <pv-card v-for="plan in plans" :key="plan.id" class="plan-card">
      <template v-slot:header>
        <h2 class="plan-title">{{ plan.name }}</h2>
      </template>
      <pv-divider class="divider"></pv-divider>
      <template v-slot:content>
        <p class="plan-description">{{ plan.description }}</p>
      </template>
      <template v-slot:footer>
        <pv-button class="plan-button" :class="{'current-plan': plan.isCurrent}" @click="startPlan(plan.id)">{{ plan.isCurrent ? 'Plan actual' : 'Start now' }}</pv-button>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
.plan-cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 65%;
  margin: auto;
}

.plan-card {
  flex: 1 1 calc(33.333% - 1rem);
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: justify;
}

.plan-title {
  color: #b3d465;
  text-align: center;

}

.plan-button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #b3d465;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
</style>
